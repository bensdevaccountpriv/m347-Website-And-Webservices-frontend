FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y \ 
apache2 \
&& a2enmod rewrite \
&& rm -rf /var/lib/apt/lists/*

RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

WORKDIR /var/www/html

COPY . .

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
