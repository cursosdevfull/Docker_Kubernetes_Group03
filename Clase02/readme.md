## Notas Clase 02

### Tabla de contenidos

- [Equivalencia del comando _run_](#equivalencia-del-comando-run)
- [Comandos para imágenes](#comandos-para-imagenes)
- [Comandos para contenedores](#comandos-para-contenedores)
- [Creando volúmenes](#creando-volúmenes)
- [Comandos para volúmenes](#comandos-para-volúmenes)

### Equivalencia del comando run

---

```
docker run busybox
```

Es equivalente a

```
docker pull busybox
docker create busybox
docker start <nombre del contenedor | id del contenedor>
```

### Comandos para imágenes

---

- Para listar imágenes

```
docker image ls
```

- Para filtrar la lista de imágenes usando una palabra de búsqueda (solo funciona con terminales tipo Linux)

```
docker images | grep <palabra a buscar>
```

- Para eliminar una imagen

```
docker rmi <nombre imagen | id imagen>
```

> _Una imagen no puede eliminarse si está asociada a un contenedor. Se debe eliminar el contenedor antes_
> {#custom-id}

### Comandos para contenedores

---

- Para detener un contenedor

```
docker stop <nombre imagen | id imagen>
```

- Para eliminar un contenedor previamente detenido

```
docker rm <nombre imagen | id imagen>
```

- Para eliminar un contenedor que se está ejecutando

```
docker rm -f <nombre imagen | id imagen>
```

- Para listar los contenedores que se están ejecutando

```
docker ps
```

- Para listar todos los contenedores (ejecutándose o no)

```
docker ps -a
```

- Para listar los contenedores y solo mostrar la columna Id Contenedor (CONTAINER_ID)

```
docker ps -a -q
```

- Para listar contenedores basados en una imagen y mostrar solo la columna Id Contenedor (CONTAINER_ID)

```
docker ps -a --filter ancestor=busybox -q
```

- Para eliminar contenedores basados en una imagen

```
docker ps -a --filter ancestor=<nombre imagen> -q | xargs docker rm -f
```

- Para detener contenedores basados en una imagen

```
docker ps -a --filter ancestor=<nombre imagen> -q | xargs docker stop
```

- Para crear un contenedor con nombre, en puerto específico y no vinculado

```
docker run -d --name <nombre del contenedor> -p 8082:80 nginx
```

- Para inspeccionar un contenedor

```
docker inspect <nombre del contenedor | id del contenedor>
```

### Creando volúmenes

---

- Para crear volúmenes tipo host para NGINX

```
docker run -d -p 9020:3000 && \
-v d:/Cursos/Docker_Kubernetes_Group03/Clase02/nginx:/usr/share/nginx/html && \
-v d:/Cursos/Docker_Kubernetes_Group03/Clase02/nginx-data:/etc/nginx/conf.d && \
--name server-nginx4 && \
nginx
```

> _En la siguiente clase se mostrará una forma menos larga_

- Para crear volúmenes anónimos

```
docker run -d -p 9030:80 && \
-v /usr/share/nginx/html && \
-v /etc/nginx/conf.d && \
--name server-nginx5 && \
nginx
```

- Para vincular un volúmen nombrado a un contenedor

```
docker run -d -p 9040:80 && \
-v data-nginx:/usr/share/nginx/html && \
--name server-nginx6 && \
nginx
```

> _El volúmen nombrado 'data-nginx' debe haber sido creado previamente_

### Comandos para volúmenes

- Para listar volúmenes

```
docker volume ls
```

- Para crear un volúmen nombrado

```
docker volume create <nombre del volumen>
```

- Para eliminar un contenedor juntamente con su volúmen

```
docker rm -fv <nombre del contenedor>
```

> _La opción -v aplica cuando el volúmen es anónimo_
