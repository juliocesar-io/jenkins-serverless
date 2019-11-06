#!/usr/bin/env groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'build steps go here'
            }
        }
        stage('Test') {
            steps {
                echo 'test steps go here'
            }
        }
        stage('deploy') {
            when { branch 'master' }
            steps {
                echo 'deploy steps go here'
            }
        }
        stage('smoke tests') {
            when { branch 'master' }
            steps {
                echo 'smoke test steps go here'
            }
        }
    }
}
