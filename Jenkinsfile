pipeline {
    agent any

    stages {
        stage('setup') {
            steps {
                git branch: 'main', url: 'https://github.com/Eduferr/teste-api-ebac.git' 
                sh 'npm install'
            }
        }
        stage('servidorUp') {
            steps {
                sh  'start /b npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'NO_COLOR=1 npm test'
            }
        }
    }
}