# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Verificar la construcción
RUN ls -la dist/
RUN cat dist/index.html

# Production stage
FROM nginx:alpine

# Copiar la configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos de build al directorio de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Verificar que los archivos se copiaron correctamente
RUN ls -la /usr/share/nginx/html
RUN cat /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 