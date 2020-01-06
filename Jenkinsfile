node {
    stage 'Checkout'
     sh 'whoami'
     checkout scm
     sh 'git config http.sslverify false'
    stage 'Prepare containers'
     docker.image("node:8.11-stretch").pull()
    stage 'Build'
     sh 'docker build -t automated-tests .'
    stage 'Test'
      sh 'docker run automated-tests'    
}
