#Stage 1 - build
FROM node:20-bookworm-slim

WORKDIR /src

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY ./src ./src

EXPOSE 3000

CMD ["npm","run", "build"]