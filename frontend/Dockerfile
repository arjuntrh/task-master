FROM node:14.15

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /frontend

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /frontEnd/node_modules/.bin:$PATH

# install and cache app dependencies
# COPY package.json /frontend/package.json
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli@8.3.29

# add app
COPY . .

# start app
CMD ng serve --host 0.0.0.0 --disable-host-check