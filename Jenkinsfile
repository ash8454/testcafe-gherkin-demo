pipeline {
    agent {
        docker { image 'node:8.11-stretch' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'node --version'
            }
        }
    }
}