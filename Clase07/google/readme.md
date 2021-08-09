## Despliegue en Google Cloud

### Obtener cuenta

- [Google Cloud](https://cloud.google.com)

### Crear un proyecto

- Crearlo desde la consola

### Habilitar el Container Registry

### Descargar e instalar gcloud

- [Descarga GCloud](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe?hl=Es)

### Autenticarse con Google Cloud para vincularnos con el Container Registry

```
gcloud auth login
```

### Conectar con proyecto

```
gcloud config set project cursodocker03
gcloud auth configure-docker
```

### Habilitar el control de acceso inicial

```
gcloud projects get-iam-policy cursodocker03 --flatten="bindings[].members" --format='table(bindings.role)' --filter="bindings.members:service-845412221130@containerregistry.iam.gserviceaccount.com"
```

### Taguear las imágenes

```
docker tag frontend:latest [hostname]/[id proyecto]/frontend
docker tag frontend:latest grc.io/cursodocker03/frontend
```

### Construir y publicar las imágenes como en AWS usando docker-compose-google.yaml

### Habilitar Kubernetes Engine API

### Conectarse al cluster

```
gcloud container clusters get-credentials cluster-curso-k8s --zone us-central1-c --project cursodocker03
```
