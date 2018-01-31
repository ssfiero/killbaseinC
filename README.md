# killbaseinC

An update to the Killbase app built with C++


## C++/Wt(Witty) Library Commands

`g++` is a compiler which generates machine code for the `C++` language.

Step 1: Compile source code in local file (.cpp) into a machine language file called an object file. The object file will be saved in your project folder. The ```-o``` tells ```g++``` to make an executable file named ```hello``` from the ```hello.cpp``` source file.
```
g++ -std=c++14 -o hello hello.cpp -lwthttp -lwt
```

Step 2: Run the executable file ```./hello``` and designate the http address ```localhost:``` and the port number ```9090```.
```
./hello --docroot . --http-address 0.0.0.0 --http-port 9090
```


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



## General C++ Commands

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
