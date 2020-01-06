// node('dockerslaves'){
//     stage 'Checkout'
//      sh 'whoami'
//      checkout scm
//      sh 'git config http.sslverify false'
//     stage 'Prepare containers'
//      docker.image("node:8.11-stretch").pull()
//     stage 'Build'
//      sh 'docker build -t automated-tests .'
//     stage 'Test'
//       sh 'docker run automated-tests'    
// }

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
        stage('Build and run e2e tests ') {
            parallel {
                stage('Test in Chrome') {
                    agent {
                        dockerfile {
                            filename "${BROWSER_DOCKER_PATH}"
                        }
                    }
                    steps {
                        script {
                            checkout scm
                            def rootDir = pwd()
                            def flow = load "${rootDir}${SHARED_LIBRARY_PATH}"
                            flow.build()
                            flow.test('Chrome')
                        }
                    }
                }
                // stage('Test in Firefox') {
                //     agent {
                //         dockerfile {
                //             filename "${BROWSER_DOCKER_PATH}"
                //         }
                //     }
                //     steps {
                //         script {
                //             checkout scm
                //             def rootDir = pwd()
                //             def flow = load "${rootDir}${SHARED_LIBRARY_PATH}"
                //             flow.build()
                //             flow.test('Firefox')
                //         }
                //     }
                // }
            }
        }
        stage('Publish reports') {
            agent {
                node {
                    label 'master'
                }
            }
            steps {
                script {
                    checkout scm
                    def rootDir = pwd()
                    def flow = load "${rootDir}${SHARED_LIBRARY_PATH}"
                    flow.publishReports()
                    flow.checkTests()
                }
            }
        }
    }
    post {
        failure {
            script {
                checkout scm
                def rootDir = pwd()
                def flow = load "${rootDir}${SHARED_LIBRARY_PATH}"
                flow.checkForFailure()
            }
        }
    }
}