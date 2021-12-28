FROM node:alpine3.12

WORKDIR /Users/admin/Desktop/Github/PMPT/client-side

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]