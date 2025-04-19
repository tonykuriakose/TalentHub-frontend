FROM node:23-alpine-slim AS builder

WORKDIR /app


COPY package*.json ./


RUN npm install

COPY . .


RUN npm run builder


FROM node:23-alpine-slim AS development


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 3000



CMD ["npm","run","dev"]


FROM node:23-alpine-slim AS production


WORKDIR /app


COPY package*.json ./


RUN npm install --only=production


COPY --from=builder /app/dist ./dist


EXPOSE 3000


CMD ["npm","start"]


