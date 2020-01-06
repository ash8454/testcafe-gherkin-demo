
node {
    // agent {
    //     docker { image 'node:7-alpine' }
    // }
    // stages {
    //     stage('Test') {
    //         steps {
    //             sh 'node --version'
    //         }
    //     }
    // }
    stage 'Checkout'
        sh 'whoami'
        checkout scm
        sh 'git config http.sslverify false'
    stage 'Prepare containers'
        docker.image("node:8.11-stretch").pull()
}