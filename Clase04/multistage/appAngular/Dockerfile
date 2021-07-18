#IMAGEN BUILD
FROM node:14-alpine as BUILD 

RUN mkdir /app

WORKDIR /app

ADD package.json .

ADD package-lock.json .

RUN npm install

ADD . .


RUN npm run build --configuracion=production

#IMAGEN FINAL
FROM nginx:alpine 

COPY --from=BUILD /app/dist/appAngular /usr/share/nginx/html

COPY --from=BUILD /app/nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]