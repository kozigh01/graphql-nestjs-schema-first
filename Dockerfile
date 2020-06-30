FROM node:14-alpine As development

WORKDIR /app

ENV PORT_API=3000

COPY package.json ./
RUN npm install \
    && npm install -g @nestjs/cli \
    && npm cache clean --force
    
COPY . .

EXPOSE ${PORT_API} 9229

RUN apk update && apk add bash && apk add git

# CMD ["npm", "run", "start:dev"]
CMD tail -f /dev/null

# can run with: docker run --name nest1 -e PORT_API=3002 -p 3002:3002 --rm nest1
#   - the app is setup to listen on PORT_API or default 3000

