# killbaseinC

An update to the Killbase app built with C++


## Nginx Server Commands

Nginx web server: ```sudo nginx``` to start server

Test https://localhost:8085 to ensure web server is running

Stop the server: ```sudo nginx -s stop```

File location:
``cd /usr/local/etc/nginx``

Open ```nginx.config``` with ```atom``` or ```vim /usr/local/etc/nginx/nginx.conf```

Nginx will load all files in ``/usr/local/etc/nginx/servers/``

Change the default port and default web location:
```
server {
  listen       8080;
  server_name  localhost;

  location / {
      root   html;
      index  index.html index.htm;
  }
```
to

```
server {
  listen       8085;
  server_name  localhost;

  location / {
      root   /Users/stevenfiero/Galvanize/killbaseinC;
      index  index.html index.htm;
  }
```

Error logs: ```/usr/local/var/log/nginx/```



## C++

Compile and execute C++ file

```
g++ test.cpp
./a.out
```



## Original Project Start Commands

Knex database migration: ```knex migrate:latest``` or ```knex migrate:rollback```

Knex database seed: ```knex seed:run```

PostgreSQL database: ```psql killbaseinC```

Server: ```node server.js```
