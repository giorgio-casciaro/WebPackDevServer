FROM node:slim

MAINTAINER Giorgio Casciaro <giorgio.casciaro@gmail.com>

RUN useradd -ms /bin/bash service

#RUN npm install -g typescript webpack webpack-dev-server

VOLUME /app

EXPOSE 3000

WORKDIR /app
#
# FROM nginx:latest
# ADD ./default.conf /etc/nginx/conf.d/
# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_6.x | /bin/bash -
# RUN apt-get install -y nodejs
# #RUN apt-get install -y nodejs
# #RUN apt-get install -y npm
#
# RUN apt-get update
# ENV NODE_ENV="/usr/bin/nodejs"
# RUN npm install -g vue-cli
#
# WORKDIR /var/www
