#!/usr/bin/env groovy
node {
    BROWSER_DOCKER_PATH = 'Dockerfile'
    SHARED_LIBRARY_PATH = '/vars/Pipeline.groovy'
}
pipeline {
    agent {
        node {
            label 'master'
        }
    }
    environment {
        GIT_SSL_NO_VERIFY = true
    }

    stages {
        stage 'Prepare containers'{
            docker.image("node:8.11-stretch").pull()
        }
        stage 'Build' {
            sh 'docker build -t automated-tests .'
        }
        stage 'Test' {
            sh 'docker run automated-tests'    
        }
        // stage('Publish reports') {
        //     agent {
        //         node {
        //             label 'master'
        //         }
        //     }
        //     steps {
        //         script {
        //             checkout scm
        //             def rootDir = pwd()
        //             def flow = load "${rootDir}${SHARED_LIBRARY_PATH}"
        //             flow.publishReports()
        //             flow.checkTests()
        //         }
        //     }
        // }
    }
    // post {
    //     failure {
    //         script {
    //             checkout scm
    //             def rootDir = pwd()
    //             def flow = load "${rootDir}${SHARED_LIBRARY_PATH}"
    //             flow.checkForFailure()
    //         }
    //     }
    // }
}