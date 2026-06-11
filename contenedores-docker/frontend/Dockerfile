
FROM rockylinux:9

RUN dnf install -y epel-release \
    && dnf install -y nginx \
    && dnf clean all


RUN mkdir -p /usr/share/nginx/html
COPY html/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
