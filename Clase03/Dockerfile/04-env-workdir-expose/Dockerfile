FROM centos:7 

RUN yum update httpd && \
    yum install httpd -y 

ENV puerto=3000
ENV host=0.0.0.0

WORKDIR /var/www/html

RUN echo "$puerto" > ./test.html
RUN echo "<h3>PORT: $puerto</h3>" > ./test2.html

EXPOSE 90

CMD ["apachectl", "-DFOREGROUND"]