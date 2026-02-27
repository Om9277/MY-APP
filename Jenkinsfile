stage('Run Container') {
    steps {
        bat 'docker rm -f react-container 2>nul || echo No existing container'
        bat 'docker run -d -p 3000:3000 --name react-container my-react-app'
    }
}