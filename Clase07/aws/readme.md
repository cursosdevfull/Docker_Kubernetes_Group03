## Despliegue en AWS

### Herramientas a instalar

- Chocolatey (Windows)
- Brew (Mac)
- aws-cli (https://awscli.amazonaws.com/AWSCLIV2.msi)
- eksctl (choco install eksctl -y)
- helm (choco install kubernetes-helm)

### Configurar usuario

```
aws configure
```

### Crear cluster

```
eksctl create cluster --name cluster-curso-k8s --without-nodegroup --region us-east-2 --zones us-east-2a,us-east-2b
```

### Agregar nodos

```
eksctl create nodegroup --cluster cluster-curso-k8s --name cluster-curso-k8s-workers --version auto --node-type t3.medium --nodes 1 --nodes-min 1 --nodes-max 3 --asg-access
```

### Crear IAM Provider

```
eksctl utils associate-iam-oidc-provider --cluster cluster-curso-k8s --approve
```

### Descargar política para el cluster

```
curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.1.2/docs/install/iam_policy.json
```

### Crear la política

```
aws iam create-policy --policy-name AWSLoadBalancerControllerIAMPolicy --policy-document file://iam_policy.json
```

### Crear la cuenta ServiceAccount para el cluster

```
eksctl create iamserviceaccount --cluster=cluster-curso-k8s --namespace=kube-system --name=aws-load-balancer-controller --attach-policy-arn=arn:aws:iam::282865065290:policy/AWSLoadBalancerControllerIAMPolicy --override-existing-serviceaccounts --approve
```

### Verificar si existe el controlador ingress del balanceador

```
kubectl get deployment -n kube-system alb-ingress-controller
```

> _Se espera que no exista_

### Instalar el Target Group Binding

```
kubectl apply -k "github.com/aws/eks-charts/stable/aws-load-balancer-controller/crds?ref=master"
```

### Agregar los repositorios

```
helm repo add eks https://aws.github.io/eks-charts
```

### Actualizar los repositorios

```
helm repo update
```

### Instalación del controlador ingress del balanceador

```
helm upgrade -i aws-load-balancer-controller eks/aws-load-balancer-controller --set clusterName=cluster-curso-k8s --set serviceAccount.create=false --set serviceAccount.name=aws-load-balancer-controller -n kube-system
```

### Verificar que exista el controlador

```
kubectl get deploy aws-load-balancer-controller -n kube-system
```

### Crear las imágenes con los tags

- Ir al ECR y crear los repositorios para cada una de las imágenes
- Usar las url de los repositorios como tag names de cada una de las imágenes
  > _Revisar docker-compose-aws.yaml_

```
docker compose -f docker-compose-aws.yaml build
```

### Vincular la cuenta de AWS con la cuenta local de Docker

```
docker login -u AWS -p $(aws ecr get-login-password --region us-east-2) 282865065290.dkr.ecr.us-east-2.amazonaws.com
```

### Subir las imágenes al ECR

```
docker compose -f docker-compose-aws.yaml push
```
