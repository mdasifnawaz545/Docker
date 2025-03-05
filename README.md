# **Docker Fundamentals & Commonly Used Commands**

Docker simplifies the deployment of web applications by containerizing them with all dependencies. This guide covers the essential Docker commands you need for web development.

---

## **1. Install & Verify Docker**
Before using Docker, ensure it is installed on your system.

### **Check if Docker is Installed**
```sh
docker --version
```
### **Verify Docker Installation**
```sh
docker run hello-world
```

---

## **2. Docker Images & Containers**
Docker containers are created from images. Below are essential commands for managing them.

### **List Available Images**
```sh
docker images
```

### **Pull an Image from Docker Hub**
```sh
docker pull <image_name>:<tag>
```
Example:
```sh
docker pull node:18
```

### **Remove an Image**
```sh
docker rmi <image_id>
```

### **Run a Container from an Image**
```sh
docker run -d --name <container_name> -p <host_port>:<container_port> <image_name>
```
Example:
```sh
docker run -d --name my_app -p 3000:3000 node:18
```

### **List Running Containers**
```sh
docker ps
```
### **List All Containers (Including Stopped)**
```sh
docker ps -a
```

### **Stop a Running Container**
```sh
docker stop <container_id>
```

### **Start a Stopped Container**
```sh
docker start <container_id>
```

### **Remove a Container**
```sh
docker rm <container_id>
```

### **Access a Running Container (Bash Shell)**
```sh
docker exec -it <container_id> /bin/bash
```
For Alpine-based images:
```sh
docker exec -it <container_id> sh
```

---

## **3. Building & Running Docker Containers**
### **Create a `Dockerfile`**
A `Dockerfile` defines the environment for your application.
```Dockerfile
# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the project files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

### **Build a Docker Image from the Dockerfile**
```sh
docker build -t my_app .
```

### **Run the Built Image**
```sh
docker run -d --name my_running_app -p 3000:3000 my_app
```

---

## **4. Docker Compose**
Docker Compose allows running multi-container applications easily.

### **Create a `docker-compose.yml` File**
```yaml
version: "3.8"
services:
  app:
    build: .
    container_name: my_app_container
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
    command: ["npm", "start"]
```

### **Start Containers with Docker Compose**
```sh
docker compose up -d
```

### **Stop Containers with Docker Compose**
```sh
docker compose down
```

### **Rebuild and Restart Services**
```sh
docker compose up --build
```

---

## **5. Managing Docker Volumes & Networks**
### **List Volumes**
```sh
docker volume ls
```

### **Create a Volume**
```sh
docker volume create my_volume
```

### **Remove a Volume**
```sh
docker volume rm my_volume
```

### **List Networks**
```sh
docker network ls
```

### **Create a Network**
```sh
docker network create my_network
```

### **Connect a Container to a Network**
```sh
docker network connect my_network my_container
```

### **Disconnect a Container from a Network**
```sh
docker network disconnect my_network my_container
```

### **Remove a Network**
```sh
docker network rm my_network
```

---

## **6. Cleaning Up Unused Resources**
### **Remove Unused Images**
```sh
docker image prune -a
```

### **Remove Stopped Containers**
```sh
docker container prune
```

### **Remove Unused Volumes**
```sh
docker volume prune
```

### **Remove Everything (Caution!)**
```sh
docker system prune -a
```

---

## **7. Debugging & Logs**
### **View Container Logs**
```sh
docker logs <container_id>
```

### **Follow Live Logs**
```sh
docker logs -f <container_id>
```

### **Inspect Container Details**
```sh
docker inspect <container_id>
```

---

## **Conclusion**
These commands cover the fundamentals of Docker for web development, including container management, building images, using `docker-compose`, handling volumes and networks, and debugging.

Now you're ready to containerize and deploy your web applications efficiently with Docker!