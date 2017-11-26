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

* _-i_start an interactive container

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

docker history busybox:1.24

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