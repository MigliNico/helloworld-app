pipeline {
    agent any
     options {
     buildDiscarder(logRotator(numToKeepStr: '4'))
 }
    stages {
             stage('Clone') {
            steps {
                git branch: 'main', credentialsId: '54729486-a177-4208-b3a9-08c653b8d0f3', url: 'https://github.com/MigliNico/helloworld-app'
            }
        }
             stage('Compile') {
            steps {
                echo 'Hello compile!' 
                dir('/var/jenkins_home/workspace/hello-world/builder') {
                // sh "docker build -t nginx-builder . "
                 
}
                dir('/var/jenkins_home') {
                 sh "./s2i build /var/jenkins_home/workspace/hello-world nginx-builder helloworldapp"
                 
}
            
            }
        }
             stage('Deploy') {
            steps {
                sh "docker run -d -p 3021:8080 helloworldapp"
            }
        }
    }
}
