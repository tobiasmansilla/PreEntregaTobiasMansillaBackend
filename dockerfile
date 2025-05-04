FROM node:20.15.0
WORKDIR /app
COPY package*.json ./
COPY . .
# COPY .env .env
RUN npm install
EXPOSE 8080
CMD ["node", "./src/server.js"]
# docker build -t entrega1 .
