FROM node:latest
# use nodemon for development
RUN npm install --global nodemon

# Create app directory

WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/.
RUN mkdir /data
RUN ln -s /usr/src/app/package.json /data/.
WORKDIR /data
RUN npm install
ENV NODE_PATH /data/node_modules/
WORKDIR /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
