FROM node:latest

# Create app directory
WORKDIR /usr/src/app

COPY app.js /usr/src/app
RUN npm init -y
RUN npm install --save express mysql body-parser

EXPOSE 3000

CMD [ "node", "/usr/src/app/app.js" ]
