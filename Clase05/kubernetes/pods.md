## PODS

### Crear un pod

```
kubectl run server --image=nginx:alpine
```

### Listar pods

```
kubectl get pods
kubectl get po
```

### Para acceder al puerto de un pod

```
kubectl port-forward server 7000:80
```

### Para acceder a la información del pod

```
kubectl get po server
kubectl get po server -o yaml
```

### Para describir lo que sucede dentro de un pod

```
kubectl describe po server
```

### Para ejecutar un manifiesto

```
kubectl apply -f 01-pod.yaml
```

### Para eliminar un manifiesto

```
kubectl delete -f 01-pod.yaml
kubectl delete po serverweb
```
