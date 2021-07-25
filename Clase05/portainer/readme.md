## Portainer

### Instalar y ejecutar el Portainer

```
docker run -d -p 3040:9000 --name portainer --restart=always -v portainer_data:/data portainer/portainer -H tcp://host.docker.internal:2375
```
