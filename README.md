# Techtronix Store App

_Esta App se encarga mostrar los diferentes productos que se ofrecen en la tienda online Techtonix._

---
## Empecemos 🚀

_Se deben ejecutar los siguientes comandos para obtener una copia local del proyecto, para desarrollo y pruebas._

### Instalación 🔧

_Inicialmente se debe clonar el proyecto e ingresar al mismo usando los comandos:_

```
git clone https://github.com/jpaomat/techtronix-app.git
cd techtronix-app
```
_Adicional debe ejecutar el comando `npm install` para instalar todas las dependencias necesarias para ejecutar el proyecto localmente._
```
npm install
```
### Scripts Disponibles

_En el directorio del proyecto, puede ejecutar los siguientes comandos para correr el proyecto localmente, las pruebas unitarias y el linter:_

#### Ejecutar el App en modo desarrollo ⚙️

```
npm start
```
Este comando por default ejecuta la App en el navegador en el puerto 3000 [http://localhost:3000](http://localhost:3000).









## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

# mag-find-mutants-function
Este servicio se encarga de determinar si una persona es un mutante al validar su secuencia de ADN.

## Instalación
***
installation.
```
$ git clone https://github.com/jpaomat/mag-find-mutants-function.git
$ cd mag-find-mutants-function
```
## Ejecutando las pruebas ⚙️

Para la ejecución de las pruebas unitarias use el comando `npm run test` este le mostrara la covertura de las pruebas y genera una carpeta coverage en la raiz del proyecto.

## Ejecutando linter ⚙️

Para la ejecución del linter para el análisis de la calidad del código use `npm run lint` este le mostrara si hay algún por en la sintaxis del código.

## Despliegue 📦

Este proyecto solo se puede probar una vez este desplegado en la nube de AWS, para esto solo tiene que subir los cambios que realice al repositorio de GIT con los comandos:

Hacer commit `git commit -m "text to commit"`
Subir cambios `git push origin feature/nombre_rama`

Es importante tener en cuenta que este proyecto esta configurado para que al hacer push previamente se ejecuten los comandos del linter y las pruebas unitarias, por lo que solo deja subir cambios si los anteriores comandos se ejecutan exitosamente.

Una vez se suban los cambios empieza a ejecutarse el pipeline que se encarga de desplegar el código en el servicios Lambda de AWS.

1. [mag-find-mutants-function/actions](https://github.com/jpaomat/mag-find-mutants-function/actions) workflows de GithubActions 
2. [mag-find-mutants-function/actions/runs](https://github.com/jpaomat/mag-find-mutants-function/actions/runs/1641530241) ultimo pipeline ejecutado

sonar-> [Clean Code-sonar-reporter-mag-find-mutants-function](https://sonarcloud.io/summary/new_code?branch=feature%2FunitTests&id=jpaomat_mag-find-mutants-function)

## Consumo del Servicio
En el siguiente Link encuentras la documentación para hacer el consumo del servicio /mutant a traves de swagger o generar el curl para su ejecución en POSTMAN:

[Api-mag-find-mutants-function-swagger](https://app.swaggerhub.com/apis-docs/jpaomat/mag-mutantns_api/v1)

## Ejemplo de los parámetros de entrada:
1. POST → /mutant/ { “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] } -> secuencia ADN de un mutante
2. POST → /mutant/ { “dna”:["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"] } -> secuencia ADN de un humano
