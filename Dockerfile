## Stage 1 (production base)
# This gets our prod dependencies installed and out of the way
FROM node:14-alpine As base

ENV NODE_ENV=production
ENV PORT_API=3000
EXPOSE ${PORT_API} 9229

RUN apk update \
    && apk add --no-cache tini

WORKDIR /node

COPY package*.json ./
RUN chown -R node:node .
USER node
RUN npm ci \
    && npm cache clean --force


## Stage 2 (development)
# we don't COPY in this stage because for dev you'll bind-mount anyway
# this saves time when building locally for dev via docker-compose
# can run with: docker run --name nest1 -e PORT_API=3002 -p 3002:3002 --rm nest1
#   - the app is setup to listen on PORT_API or default 3000
FROM base as dev
    
ENV NODE_ENV=development
ENV PATH /node/node_modules/.bin:$PATH

WORKDIR /node

USER root
RUN apk add --no-cache bash \
    && apk add --no-cache git 

USER node
RUN npm install --only-development

WORKDIR /node/app

ENTRYPOINT [ "/sbin/tini", "--" ]
CMD ["npm", "run", "start:debug"]    


## Stage 3 (copy in source for prod)
# This gets our source code into builder
# this stage starts from the first one and skips dev
FROM base as prod
WORKDIR /node/app
COPY --chown=node:node . .
CMD ["node", "dist/main"]s