pipeline {
    agent any

    stages {
        stage('gitClone') {
            steps {
                git branch: 'main', url: 'https://github.com/Eduferr/teste-api-ebac.git'                
            }
        }
        stage('instalDependencia') {
            steps {
                sh 'npm install'
            }
        }
        stage('servidorUp') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'NO_COLOR=1 npm test'
            }
        }
    }
}