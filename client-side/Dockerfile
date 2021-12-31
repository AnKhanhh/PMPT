FROM node:alpine3.12

RUN mkdir -p app
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts

COPY . .

EXPOSE 3000

CMD ["npm", "start"]