#!/usr/bin/env groovy
pipeline {
    agent any
    options {
        timestamps()
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Build serverless project') {
            when {
                changeset "serverless/**"
            }
            steps {
                build(job: 'serverless')
            }
        }
        stage('Build proxy project') {
            when {
                changeset "proxy/**"
            }
            steps {
                build 'proxy'
            }
        }
    }
}
