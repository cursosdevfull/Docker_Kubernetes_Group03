FROM centos:7 

RUN yum install epel-release -y
RUN yum update -y 
RUN yum install -y nginx 

COPY index.html /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]