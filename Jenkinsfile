
node {
    checkout scm

    def customImage = docker.build("node:8.11-stretch")

    customImage.inside {
        sh 'ls'
    }
}