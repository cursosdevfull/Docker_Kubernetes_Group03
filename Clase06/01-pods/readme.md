## PODS

### Para acceder a un contenedor único dentro de un pod

```
kubectl exec -it <nombre pod> -- <bash | sh>
```

### Para acceder a un contenedor dentro de un pod (tiene más de uno)

```
kubectl exec -it <nombre pod> -c <nombre del contenedor> -- <bash | sh>
```

### Para acceder al log de un contenedor único dentro de un pod

```
kubectl logs <nombre pod>
```

### Para acceder al log de un contenedor dentro de un pod (tiene más de uno)

```
kubectl logs <nombre pod> -c <nombre del contenedor>
```

### Para mostrar la información de un pod

```
kubectl get pods <nombre pod> -o <yaml | json>
```

### Para listar mostrando las etiquetas

```
kubectl get pods --show-labels
```

### Para filtrar por etiquetas

```
kubectl get pods -l <tagname>=<value> --show-labels
```
