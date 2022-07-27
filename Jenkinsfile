import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline {
    //The agent section specifies where the entire Pipeline, or a specific stage, 
 
    agent any
    
    //The environment directive specifies a sequence of key-value pairs which will be defined
    
    environment {
        BUILD_USER = ''
    }
    
    //The parameters directive provides a list of parameters that a user should provide when triggering the Pipeline.
   
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'Ej: cypress/e2e/**/*.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }

    //The stage directive goes in the stages section and should contain a steps section, an optional agent section, 
   
    stages {
        
        stage('Build'){
            
            //The steps section defines a series of one or more steps to be executed in a given stage directive.
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
    
         stage("Deploy"){
            steps{
                echo("deploy")
            }
        }
    }

    post {
        always {
     
            script {
                BUILD_USER = getBuildUser()
            }
            
            slackSend channel: '#jenkins-example',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n Tests:${SPEC} executed at ${BROWSER} \n More info at: ${env.BUILD_URL}HTML_20Report/"
            
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            deleteDir()
        }
    }

}