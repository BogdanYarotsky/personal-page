FROM node:latest as build 
WORKDIR /react-app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:latest
COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /react-app/build /usr/share/nginx/html
