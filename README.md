# API REST de los estados, municipios y localidades de México obtenida de INEGI 2018 con MySQL
La informacon que contiene dicha API es una serie de rutas para obtener tanto estados de la republica, como sus municipiosy localidades.

## Instalación
- Requisitos 
    - Instalar Node js

        - Descarga del sitio oficial [Node js](https://nodejs.org/es/download/).

    - Motor de base de datos MySQL
     
        - Descarga de base de datos en siguiente repositorio de [developarts](https://github.com/developarts/cat_inegi/releases/tag/2018.09.v01)

- Instalar módulos de Node js dentro del proyecto
    
    `cd api_estados`

    `npm install `

Una vez instalado puedes descargar la herramienta [nodemon](https://www.npmjs.com/package/nodemon) que te permitirá inicial un demonio para depuración en tiempo real e iniciar el proyecto node

`npm install nodemon -g`

- Inicio del proyecto en terminal

    `nodemon server/server`

# Rutas

## ESTADOS 
## GET /api_estados/estados
Obtener todos los estados

```
{
    "estados":[
        {
            "id": 1,
            "clave: "01",
            "nombre": "Aguascalientes",
            "abrev": "Ags.",
            "activo": 1
        },
    ],
}
```

## MUNICIPIOS
## GET /api_estados/municipios/14
Obtener todos los municipios por el id del estado


 - Parametros
    - id (Entero)

```
{
"municipios": [
        {
            "id": 1,
            "estado_id": 14,
            "clave": "001",
            "nombre": "Acatic",
            "activo": 1
        },
    ],
}
```

## GET /api_estados/municipios_estado/Jalisco
Obtener todos los municipios por el nombre del estado

 - Parametros
    - nombre (String)

```
{
"municipios": [
        {
            "id": 1,
            "estado_id": 14,
            "clave": "001",
            "nombre": "Acatic",
            "activo": 1
        },
    ],
}
```

## LOCALIDADES
## GET /api_estados/localidades/537
Obtener todas las localidades por el id del municipio


- Parametros
    - id (Entero)

```
{
"localidades": [
        {
            "id": 119933,
            "municipio_id": 537,
            "nombre": "Acatic"
        },
    ],
}
```

## GET /api_estados/estados/localidades/Jalisco
Obtener todas las localidades por el nombre del estado


- Parametros
    - nombre (String)

```
{
"localidades": [
        {
            "id": 119933,
            "municipio_id": 537,
            "nombre": "Acatic"
        },
    ],
}
```