FROM node:17-alpine

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

COPY . /app/

EXPOSE 8000

CMD ["npm", "start"]
