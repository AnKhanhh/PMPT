FROM node:17-alpine

WORKDIR /client

COPY package.json /client/
COPY package-lock.json /client/
RUN npm install
RUN npm install react-scripts

COPY . /client/

EXPOSE 3000

CMD ["npm", "start"]
