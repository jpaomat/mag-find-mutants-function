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

[mag-find-mutants-function/actions](https://github.com/jpaomat/mag-find-mutants-function/actions) workflows de GithubActions 
[mag-find-mutants-function/actions/runs](https://github.com/jpaomat/mag-find-mutants-function/actions/runs/1629141839) workflows de GithubActions 

sonar-> [Clean Code-sonar-reporter-mag-find-mutants-function](https://sonarcloud.io/summary/new_code?branch=feature%2FunitTests&id=jpaomat_mag-find-mutants-function)

## Consumo del Servicio
En el siguiente Link encuentras la documentación para hacer el consumo del servicio /mutant a traves de swagger o generar el curl para su ejecución en POSTMAN:

[Api-mag-find-mutants-function-swagger](https://app.swaggerhub.com/apis-docs/jpaomat/mag-mutantns_api/v1)

## Ejemplpo de los parámetros de entrada:
POST → /mutant/ { “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }
