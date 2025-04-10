pipeline {
    agent any
    environment {
        dockerImage = ''
        DOCKER_CREDENTIALS = 'docker-hub-vspaceone'
        DOCKER_IMAGE = 'vspaceone/web-astro-api'

        MASTER_STAGE_WEBHOOK = credentials('vspaceone-webhook-web-astro-api')
        BETA_STAGE_WEBHOOK = credentials('vspaceone-webhook-web-astro-api-beta')

        DOCKER_BUILDKIT = 1
    }
    stages {
        stage('Build image') {
            steps {
                script {
                    dockerImage = docker.build("$DOCKER_IMAGE")
                }
            }
        }
        stage('Push latest image') {
            when {
                expression { env.BRANCH_NAME == 'main' }
            }
            steps {
                script {
                    docker.withRegistry( '', DOCKER_CREDENTIALS ) {
                        dockerImage.push("latest")
                    }                    
                }
            }
        }
        stage('Push beta image') {
            when {
                expression { env.BRANCH_NAME == 'beta' }
            }
            steps {
                script {
                    docker.withRegistry( '', DOCKER_CREDENTIALS ) {
                        dockerImage.push("beta")
                    }
                }
            }
        }
        stage('Send main webhooks') {
            when {
                expression { env.BRANCH_NAME == 'main' }
            }
            steps {
                sh "curl $MASTER_STAGE_WEBHOOK"
            }
        }
        stage('Send beta webhooks') {
            when {
                expression { env.BRANCH_NAME == 'beta' }
            }
            steps {
                sh "curl $BETA_STAGE_WEBHOOK"
            }
        }
    }
}