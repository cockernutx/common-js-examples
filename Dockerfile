FROM ubuntu:latest

RUN apt-get update -y
RUN apt install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_current.x| bash -
RUN apt install nodejs -y

RUN npm install create-react-app react typescript -g --save-dev

WORKDIR app/

CMD npm start
