ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production
ENV PORT=80

WORKDIR /usr/src/app

RUN apk --no-cache add curl

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

USER node

COPY . .

EXPOSE 80

CMD ["node", "index.js"]