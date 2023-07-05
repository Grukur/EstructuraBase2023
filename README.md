#<b>Trabajos M8 S2</b>

Se expone un servicio que permite hacer CRUD de las entidades usuario y bootcamp, así como también asociar un usuario a un bootcamp mediante requests HTTP con el respectivo método y payload. El payload soportado es en formato JSON.

##<b>Frontend y Despliegue:</b> 
Además de desarrollar el backend de la aplicación, también he creado el frontend correspondiente. Puedes ver la página de inicio localmente visitando localhost:3000 en tu navegador. En la seccion "Bootcamp" se muestran los cursos disponibles cargados dinamicamente desde la base de datos y en inscripciones el formulario para gregar un nuevo usuario, el que tambien se guardará en la bd local.


## Ejemplo de serialización de un Usuario:

{ "firstName": "Leandro", "lastName": "Pérez", "email": "leando.perez@gmail.com" }


## Ejemplo de serialización de un Bootcamp:

{ "title": "Introduciendo El Bootcamp De React.", "cue": 10, "description": "React es la librería más usada en JavaScript para el desarrollo de interfaces." }


## Ejemplo de asociación:

{  "userId": 4,  "bootcampId": 3 }



## Métodos soportados:

<b>GET:</b> obtener información de un usuario o todos los usuarios/Bootcamp

<b>POST:</b> crear un nuevo Usuario/Bootcamp

<b>PUT:</b> actualizar la información de un Usuario/Bootcamp

<b>DELETE:</b> eliminar un Usuario/Bootcamp


## Para ejecutar el servidor:

Verificar que el puerto 3000 no esté en uso

Ejecutar npm run dev desde la terminal

El servidor estará disponible en http://localhost:3000


## Rutas:

### Ejemplos de requests

#### <b>Para los usuarios</b>

<b>Obtener información de todos los usuarios:</b>

GET http://localhost:3000/api/users


<b>Obtener información de un usuario en particular (ID):</b>

GET http://localhost:3000/api/users/2


<b>Crear un nuevo Usuario</b>

POST http://localhost:3000/api/users


<b>Actualizar la información de un usuario existente</b>

PUT http://localhost:3000/api/users/2


<b>Eliminar un Usuario</b>

DELETE http://localhost:3000/api/users/2



#### <b>Para los bootcamps</b>

<b>Obtener información de todos los Bootcamps:</b>

GET http://localhost:3000/api/bootcamps


<b>Obtener información de un Bootcamp en particular (ID):</b>

http://localhost:3000/api/bootcamps/1


<b>Crear un nuevo Bootcamp</b>

POST http://localhost:3000/api/bootcamps



#### <b>Asociación</b>

<b>Asociar un Usuario a un bootcamp</b>

http://localhost:3000/api/bootcamps/asociar