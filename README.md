Hello-world App
Esta aplicacion esta realizada con React y desplegada en un Nginx. 

Todo el pipeline corre sobre un Jenkins local, el cual se levanta de la siguiente manera:
docker run -it -u root -p 8082:8080 -p 50000:50000 -d -v /home/redbee/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker  jenkins/jenkins

Una vez levantado el jenkins se procede a correr el job de hello-world, el cual lo que hara sera tomar el pipeline del Jenkinsfile de este repositorio, y ejecutara en consecuencia el clone del repo, el build y finalmente el deploy. Para ver mas en detalle el proceso del build dirigirse al script .s2i/bin/usage que esta en la carpeta builder de este proyecto.

