FROM centos:7

RUN yum update httpd && yum install httpd -y 

WORKDIR /var/www/html 

COPY run.sh ./run.sh

CMD ["sh", "./run.sh"]