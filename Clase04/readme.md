## Imágenes dangling (huérfanas)

### Listar imágenes dangling

```
docker images -f dangling=true
```

### Obtener sus ids

```
docker images -f dangling=true -q
```

### Eliminarlas

```
docker images -f dangling=true -q | xargs docker rmi
```
