## Clase03

---

### Estadísticas de uso de contenedores

```
docker stats vigorous_bohr
```

### Límites de uso de contenedores

```
docker run --name prueba -it --rm -m "500mb" nginx bash
docker run --name prueba -it --rm -m "5gb" nginx bash
docker run --name prueba -it --rm -m "5gb" --cpus=3 nginx bash
docker run --name prueba -it --rm -m "5gb" --cpuset-cpus=1,3 nginx bash
docker run --name prueba -it --rm -m "5gb" --cpuset-cpus=0-3 nginx bash
```

### Copiar

```
docker run --name prueba -it --rm nginx bash
docker cp notas.txt prueba:/temporales
docker cp prueba:/temporales/notas2.txt ./
docker cp ./subdirectorio prueba:/temporales
```

### Crear una imagen desde un contenedor

```
docker commit prueba newimage:1.0
```

### Redes

- Para crear una red Bridge

```
docker network create -d bridge network01
```

- Para crear una red con nuestro propio subnet

```
docker network create --subnet 172.168.7.0/24 --gateway 172.168.7.10 network04
```

- Para listar las redes

```
docker network ls
```

- Crear un contenedor asociado a una red

```
docker run -d --name nginx01 -p 8081:80 --network network01 nginx
docker run -d --name nginx02 -p 8082:80 --network network01 nginx
docker run -d --name nginx03 -p 8083:80 --network network02 nginx
docker run -d --name nginx04 -p 8084:80 --network network02 nginx
docker run -d --name nginx05 -p 8085:80 --network network04 nginx
```

- Para asociar una red a un contenedor

```
docker network connect network02 nginx02
```

- Para desasociar una red a un contenedor

```
docker network disconnect network02 nginx02
```

- Crear contenedor con ip fija

```
docker run -d --name nginx06 --network network04 -p 8086:80 --ip 172.168.7.20 nginx
```

- Crear contenedor asociado a una red host

```
docker run -d --name nginx07 --network host -p 8087:80 nginx
```

- Crear contenedor asociado a una red none

```
docker run -d --name nginx08 --network none nginx
```

### Variables de entorno

- Crear un contenedor con variables de entorno

```
docker run -d --name nginx09 -e user=shidalgo -e password=123 nginx
```

- Crear un contenedor de MySQL

```
docker run -d --name mysql-server -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 mysql
```

### Dockerfile

- Para ejecutar un archivo Dockerfile

```
docker build -t image-apache:1.0 .
docker build -t image2-apache -f miDockerfile.txt .
```
