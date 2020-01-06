pipeline {
    agent {
        docker { image 'node:8.11-stretch' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}