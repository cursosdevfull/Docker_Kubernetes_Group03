FROM centos:7

RUN yum update httpd 
RUN yum install httpd -y

CMD ["apachectl", "-DFOREGROUND"]