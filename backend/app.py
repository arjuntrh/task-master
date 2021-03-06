from flask import Flask, render_template, request, redirect, make_response, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
from flask_celery import make_celery
from flask_cors import CORS
import time

app = Flask(__name__)

# App  init-------------
api = Api(app)
CORS(app)

# Database setup-------
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:password@db:5432/taskMaster_db"
db = SQLAlchemy(app)

# Celery setup---------
app.config['CELERY_BROKER_URL'] = 'redis://redis:6379//'
celery = make_celery(app)

# sqlalchemy model----------


class Task(db.Model):
    __tablename__ = 'Task'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    note = db.Column(db.String(200), nullable=False)
    completed = db.Column(db.Boolean, nullable=False)
    # date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'note': self.note,
            # 'date_created': self.date_created
            'completed': self.completed
        }


db.create_all()

# # flask-RESTful APIs--------


class TaskListAPI(Resource):
    def get(self):
        tasks = Task.query.all()
        # return make_response(render_template('index.html', tasks = tasks))
        return jsonify([task.serialize() for task in tasks])
        # return "Hello"

    def post(self):
        # task_title = request.form['title']
        task_title = request.json['title']
        task_completed = request.json['completed']
        task_note = request.json['note']
        new_task = Task(title=task_title,
                        completed=task_completed, note=task_note)

        try:
            db.session.add(new_task)
            db.session.commit()
            # return redirect('/')
            return jsonify(new_task.serialize())
        except:
            return 'There was an error adding your task'


class TaskAPI(Resource):
    def get(self, id):
        task = Task.query.get_or_404(id)
        # return make_response(render_template('update.html', task=task))
        return jsonify(task.serialize())

    def delete(self, id):
        task_to_delete = Task.query.get_or_404(id)
        try:
            db.session.delete(task_to_delete)
            db.session.commit()
            # return redirect('/')
            return jsonify(task_to_delete.serialize())
        except:
            return 'There was a problem deleting that task'

    def put(self, id):
        task = Task.query.get_or_404(id)
        # task.title = request.form['title']
        task.title = request.json['title']
        task.completed = request.json['completed']
        task.note = request.json['note']

        try:
            db.session.commit()
            # return redirect('/')
            return jsonify(task.serialize())
        except:
            return 'There was a problem updating that task'


class CeleryAPI(Resource):
    def get(self):
        celery_insert.delay()
        return "Task Scheduled!"


@celery.task(name="app.CeleryInsertOperation")
def celery_insert():
    time.sleep(5)
    scheduled_task = Task(title="Celery Task",
                          completed=False, note="Celery Task Notes")

    db.session.add(scheduled_task)
    db.session.commit()
    return "Done"


api.add_resource(TaskListAPI, '/', '/tasks')
api.add_resource(TaskAPI, '/tasks/<int:id>')
api.add_resource(CeleryAPI, '/tasks/schedule')


if __name__ == "__main__":
    # app.run(debug = True)
    app.run(debug=True, host='0.0.0.0')
