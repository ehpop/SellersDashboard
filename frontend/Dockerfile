FROM node:latest
LABEL author="ehpop"

WORKDIR /app

COPY ./public /app/public
COPY ./src /app/src
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./tsconfig.json /app/tsconfig.json

RUN npm install -g npm@10.3.0
RUN npm install --force

EXPOSE 3000

CMD ["npm", "start"]
