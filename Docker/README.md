# Résumé 

### List images avalaible in local
```
docker images
```

### About images

**An image as a unique ID**

An image is specified by the repository name and tag (`repository:tag`).

###  Run images container

To run a new container from a hub image execute this command

```
docker run busybox:1.24 echo 'Hello World'
```

#### Avalaible options

* _-i_ start an interactive container

* _-t_ Create a pseudo-tty that attaches stdin and stdout

Example:

```
docker run -i -t busibox:1.24
```

each `docker run` command create a NEW container, that means you can't save data in a container.

### Run container in Background

To run a container in detached mode execute:

```
docker run -d busybox:1.24 sleep 1000
```
_(sleep 1000 is to let the container awake for 1000 seconds to really see the interest of detached mode)_

Once the container is running, the command return the long container ID

### List running Container 

To list running container, execute:

```
docker ps
```

As you can see, some information about container is display (short ID, Image used, Name, etc...).


### List all current and previous container

To display all the containers currently and previously run add the option _-a_ to `docker ps` command:

```
docker ps -a 
```

It's like an history of container execution

### Directly remove container after execution

You can remove container as soon as exited, you have to add _--rm_ option to `docker run` command

```
docker run --rm busybox:1.24 sleep 1
```

### Give custom name to container

Defaultly, docker generate random name to our container (see `docker ps` commande, column **NAME**)

```
docker run --name hello_world busybox:1.24
```

### Container informations

By given his ID, you can display informations about a container (log path, image ID, IP adresse)

```
docker inspect container_id
```

### Port mapping and Logs command

#### Port Mapping

You can expose a port inside a container and map a port to another port on the host by -p option:

```
-p host_port : container_port
```

For example, we can use tomcat images, whose localhost port access is configurated on 8080:

```
docker run -it -p 8888:8080 tomcat:8.0
```

#### Logs command

Oftenly, we prefer (or need) to run container in background (detached mode: _-d_), but, we need to sometimes watch his logs, for that, use:

```
docker logs container_id
```

### Docker image layes

```
docker history busybox:1.24
```

Top image layer is writable layer (create file, etc...)

When the container is deleted, the writable layer is also deleted

### Build docker images

#### Docker commit

docker run -it debian:jessie

save changes we made to the docker container's file system to a new image

```
docker commit container_id repository_name:tag
```

#### Writing dockerfile

```
docker build -t repository_name [path to dockerfile]
```


### Dockerfile

#### RUN Instruction

Each RUN command will execute the command on the top writable layer of the container, then commit the container as a new image. The new image is used for the next step in the DF. So each RUN instruction will create a new image layer. It is recommended to chain tje RUN instructions in the DF to reduce the number of image layers it creates

#### CMD Instruction

CMD Instruction specifies what command you want to run when the container starts up. If we don't specify CMD Instuction in the DF, Docker will use the default command defined in the base image. The CMD instruction doesn't run when building the image, it only runs when the conatiners starts up. You can specify the command in either exec for which is preferred or in shell form

#### COPY Instruction

The COPY instruction copies new files or directories from build context and adds thenm to the file system of the container

#### ADD Instruction

quite similar to COPY

ADD instruction can not only copy files but also allow you to download a file from internet and copy to the container

ADD intruction also has the ability to autoatically unpack compressed files

#### WORKDIR Instruction

Define the current working directory

### Run a command in a running container 

```
docker exec -it _container_id_ _cmd_
```

Example: 

```
docker exec -it 0c4b048c5336 bash
```
### Link container

Add mapping of hostnames and IP adresses linked, to /etc/hosts.
So hostname of container name linked, will be resolves as the IP address on the left column of the hosts file.

```
docker run [options] --link _container_name_ docker_image:tag
```

To verify those informations, execute command:

```
docker inspect linked_container_id | grep IP
```

or `ping` hostname linked

#### Benefites of Docker Container Links
* The main use for docker container links is when we build an application with a microservice architecture, we are able to run many independent components in different containers.
* Docker creates a secure tunnel between the containers that doesn't need to expose any ports externally on the container

### Docker Compose

Docker compose is a tool for defining and running multiple container docker application, it's a very handy tool to quickly get docker environment up and running

So, with Docker compose we can define all the containers in a single file called `docker-compose.yml` file to store the configuration of all the containers, which removes the burden to maintain our scripts for docker orchestration

Little example of a docker compose file:

```
version: 3
services:
  dockerapp:
    build: .
    ports:
      - "5000:5000" // <host_port>:<container_port>
    depends_on:
      - redis
  redis:
    image: redis:3.2.0
```

#### Version
`version: ` specify version of docker-compose syntax version

We need to put it at the root of `yml` file

#### Services
`service:` to defined the services, the make up our application. 

For each service we provide instruction about how to built and run a container

Example:

```
services:
  dockerapp:
    build: . // Location of DockerFile to build the container/service
    ports: // Define port redirecting (like -p option of `docker run` command)
      - "5000:5000" // <host_port>:<container_port>
    depends_on: // Dependances of the container/service, docker will first start those dependances before
      - redis
  redis:
    image: redis:3.2.0 // Set image and tag to use
```

#### Docker Compose Command

* `docker-compose up`: Starts up all the containers.
* `docker-compose ps`: Checks the status of the containers managed by docker compose.
* `docker-compose logs`: Outputs colored and aggregated logs for the compose-managed containers.
* `docker-compose logs -f`: Outputs appended log when the log grows.
* `docker-compose logs _container_name` :Outputs the logs of a specific container.
* `docker-compose stop`: Stops all the running containers without removing them.
* `docker-compose rm`: Removes all the containers.
* `docker-compose build`: Rebuilds all the images.



## Redis

* In-memory data structure store, used as database, cache and message broker
* Build-in replication and different levels of on-disk persistence
* Widely used in lots of critical products in the field such as Twitter Timeline Service and Facebook News Feed
