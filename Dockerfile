FROM node:14-alpine As development

WORKDIR /app

ENV PORT_API=3000

COPY package.json ./
RUN npm install

copy . .

EXPOSE ${PORT_API}

CMD ["npm", "run", "start:dev"]

# can run with: docker run --name nest1 -e PORT_API=3002 -p 3002:3002 --rm nest1
#   - the app is setup to listen on PORT_API or default 3000

