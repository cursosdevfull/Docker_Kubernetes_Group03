FROM centos:7 

RUN yum update httpd && \
    yum install httpd -y 

ADD web /var/www/html 

CMD ["apachectl", "-DFOREGROUND"]
