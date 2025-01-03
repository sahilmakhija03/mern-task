pipeline {
    agent any
    tools {
        nodejs 'nodejs' // Ensure Node.js is available for your backend if needed
    }

    environment {
        NODEJS_HOME = 'C:/Program Files/nodejs'  
        SONAR_SCANNER_PATH = 'C:/Users/Sahil Makhija/Downloads/sonar-scanner-cli-6.2.1.4610-windows-x64/sonar-scanner-6.2.1.4610-windows-x64/bin'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm // Checkout the latest code from SCM
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install backend dependencies using npm or your chosen package manager
                bat '''
                set PATH=%NODEJS_HOME%;%PATH%
                npm install
                '''
            }
        }

        stage('Lint') {
            steps {
                // Run linting to ensure code quality
                bat '''
                set PATH=%NODEJS_HOME%;%PATH%
                npm run lint
                '''
            }
        }
      
        stage('Build') {
              steps {
                  // If your backend requires a build step (e.g., TypeScript compilation, bundling, etc.), include it here
                  bat '''
                  set PATH=%NODEJS_HOME%;%PATH%
                  npm run build
                  '''
              }
          }

        stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonar-token') // Accessing the SonarQube token stored in Jenkins credentials
            }
            steps {
                // Ensure that sonar-scanner is in the PATH
                bat '''
                set PATH=%SONAR_SCANNER_PATH%;%PATH%
                where sonar-scanner || echo "SonarQube scanner not found. Please install it."
                sonar-scanner.bat ^
                -Dsonar.projectKey=backend-task ^
                -Dsonar.sources=. ^
                -Dsonar.host.url=http://localhost:9000 ^ 
                -Dsonar.token=%SONAR_TOKEN% 2>&1
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
        always {
            echo 'This runs regardless of the result.'
        }
    }
}
