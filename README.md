# Levantar el proyecto con docker

Para levantar el proyecto con contenedores docker se debe tener instalado en el equipo docker y docker-compose.

En el directorio raiz (`leniolabs-tech-test`) ejecutar via terminal el comando `docker-compose up` y se construira la imagen levantando el proyecto en la url indicada en el log del contenedor (ej: 172.17.0.2:3000)

# levantar proyecto con npm

Para levantar el proyecto usando npm se debe tener instalado NodeJS

Ejecutar en el directorio `app` dentro de la raiz del proyecto:
    - `npm install`
    - `npm start`

el proyecto se levantara en: localhost:3000

NOTA: 

Se debe recargar siempre borrando el cache (ctrl + shift + r) para evitar problema de cors con la llamada a la api de congresitas.