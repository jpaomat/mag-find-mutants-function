# mag-find-mutants-function
Este servicio se encarga de determinar si una oersona es un mutante al validar su secuencia de ADN.

## Instalación
***
installation.
```
$ git clone https://github.com/jpaomat/mag-find-mutants-function.git
$ cd mag-find-mutants-function
```
## Ejecutando las pruebas ⚙️

Para la ejecuión de las pruebas unitarias use el comando `npm run test` este le mostrara la covertura de las pruebas y genera una carpeta coverage en la raiz del proyecto.

## Ejecutando linter ⚙️

Para la ejecución del linter para el analis de la calidad del código use `npm run lint` este le mostrara si hay algun por en la sintaxis del código.

## Despliegue 📦

Este proyecto solo se puede probar una vez este desplegado en la nube de AWS, para esto solo tiene que subir los cambios que realice al repositorio de GIT con los comandos:

Hacer commit `git commit -m "text to commit"`
Subir cambios `git push origin feature/nombre_rama`

Es importante tener en cuenta que este proyecto esta configurado para que al hacer push previamente se ejecutem los comandos del linter y las pruebas unitarias, por lo solo deja subir cambios solo si los anterios comandos se ejecutan con exito.

Una vez se suban los cambios empieza a ejecutarse el pipeline que se encarga de desplegar el código a AWS_

`https://github.com/jpaomat/mag-find-mutants-function/actions` workflows de GithubActions 
`https://github.com/jpaomat/mag-find-mutants-function/actions/runs/1629141839` workflows de GithubActions
