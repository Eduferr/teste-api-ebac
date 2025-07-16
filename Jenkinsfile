pipeline {
    agent any

    stages {
        stage('setup') {
            steps {
                git branch: 'main', url: 'https://github.com/Eduferr/teste-api-ebac.git' 
                bat 'npm install'
            }
        }
        stage('servidorUp') {
            steps {
                 bat 'start /b npm start'
            }
        }
        stage('Test') {
            steps {
                bat 'NO_COLOR=1 npm test'
            }
        }
    }
}
