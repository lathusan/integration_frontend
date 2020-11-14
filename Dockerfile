# build env
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# production env
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
