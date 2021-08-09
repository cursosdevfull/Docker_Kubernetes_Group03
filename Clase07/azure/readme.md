## Despliegue en Azure

### Obtener una cuenta

- [Portal Azure](https://portal.azure.com/)

### Crear un Resource Group

### Crear un Container Registry

### Descargar Azure CLI

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli)

### Loguearse con Azure

```
az login
```

### Vincular con el container Registry

```
az acr login --name cursodocker03
```

### Taguear las imágenes

```
docker tag <nombre de la imagen> <dominio del container registry>/<nombre de la imagen>
docker tag frontend:latest cursodocker03.azurer.io/frontend
```

### Publicar las imágenes usando docker-compose-azure.yaml

### Listar imágenes publicadas

```
az acr repository list --name cursodocker03
```

### Agregar el repositorio de un ingress controller

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
```

### Instalar el ingress controller

```
helm install nginx-ingress ingress-nginx/ingress-nginx --set controller.replicaCount=2     --set controller.nodeSelector."beta\.kubernetes\.io/os"=linux --set defaultBackend.nodeSelector."beta\.kubernetes\.io/os"=linux --set controller.admissionWebhooks.patch.nodeSelector."beta\.kubernetes\.io/os"=linux
```
