FROM node:14-alpine As dev

ENV PORT_API=3000

RUN apk update \
    && apk add --no-cache tini \
    && apk add --no-cache bash \
    && apk add --no-cache git

WORKDIR /node

COPY package*.json ./
RUN chown -R node:node . \
    && npm install -g @nestjs/cli
USER node
RUN npm install --only-production \
    && npm cache clean --force
    
WORKDIR /node/app
COPY --chown=node:node . .

EXPOSE ${PORT_API} 9229

ENTRYPOINT [ "/sbin/tini", "--" ]
CMD ["npm", "run", "start:dev"]
# CMD tail -f /dev/null

# can run with: docker run --name nest1 -e PORT_API=3002 -p 3002:3002 --rm nest1
#   - the app is setup to listen on PORT_API or default 3000

