FROM node:18-alpine as back
# on crée un répertoire dans l'image pour notre app
WORKDIR /usr/src/app
# on copie le package dans le dossier courant (ici /usr/src/app)
COPY package*.json ./
# on install dans l'image l'executable exiftool sinon l'image bug a cause des processus
RUN apk add --no-cache exiftool
RUN npm update -g
RUN npm install
RUN npm install exiftool-vendored --save
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

FROM httpd:2.4 as front
COPY ./front/pages /usr/local/apache2/htdocs/
COPY ./front/public /usr/local/apache2/htdocs/public/
COPY ./data /usr/local/apache2/htdocs/public/images/
EXPOSE 80
