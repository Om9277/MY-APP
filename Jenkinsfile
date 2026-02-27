pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t my-react-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker rm -f react-container 2>nul || echo No existing container'
                bat 'docker run -d -p 3000:3000 --name react-container my-react-app'
            }
        }

    }
}