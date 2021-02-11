import pytest
# from backend.app import Todo
import requests
import json

test_url = 'http://localhost:5001/tasks'

def test_getTasks():
    r1 = requests.get(test_url)
    assert r1.status_code == 200

# def test_postTask():
#     x = {'title': 'test task', 'note': 'test task note', 'completed': False}
#     # convert into JSON:
#     # y = json.dumps(x)    

#     r2 = requests.post(test_url, data=x)
#     assert r2.status_code == 200

# def test_getTask():
#     r1 = requests.get(test_url+'/51')
#     assert r1.status_code == 200





