FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

RUN npm run build


COPY . .

EXPOSE 3000

CMD [ "npm", "dev" ]