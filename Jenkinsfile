pipeline {
    agent any
     options {
     buildDiscarder(logRotator(numToKeepStr: '4'))
 }
    stages {
             stage('Clone') {
            steps {
                 sh "docker rm -f helloworld_app"
                git branch: 'main', credentialsId: '438194f2-9c5a-4300-90f4-657e392ca754', url: 'https://github.com/MigliNico/helloworld-app'
            }
        }
             stage('Compile') {
            steps {
                dir('/var/jenkins_home/workspace/hello-world/builder') {
                 sh "docker build -t nginx-builder . "
                 
}
                dir('/var/jenkins_home') {
                 sh "./s2i build /var/jenkins_home/workspace/hello-world nginx-builder helloworldapp"
                 
}
            
            }
        }
             stage('Deploy') {
            steps {
                sh "docker run -d --name helloworld_app -p 3023:8080 helloworldapp"
            }
        }
    }
}


