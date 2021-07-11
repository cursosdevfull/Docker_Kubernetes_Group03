FROM centos:7

RUN yum update httpd && yum install httpd -y

WORKDIR /var/www/html 

RUN echo "$(whoami)" > ./user01.html

RUN useradd sergio

RUN chown -R sergio .

USER sergio

RUN echo "$(whoami)" > ./user02.html

USER root

CMD ["apachectl", "-DFOREGROUND"]