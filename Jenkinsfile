pipeline{

   agent any

   parameters{

        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'Enter the scripts path that you want to execute')
        choices(name: 'BROWSER', choices: ['Chrome','Edge', 'Firefox'], description: 'Choice the browser where you want to execute the script')

            }

   options{
        ansiColor('xterm')
         }

   stages{

     stage('Building ..'){

        steps{
                echo "Building the application"
        }
 
        }
     stage('Testing ..')
        {  
           steps{

               bat "npm i"
               bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }

       }

       stage('Deploying ..')
       {

          steps{
    echo "Deploying the application"
          }
     
       }
   }

    post{
        always{
            publishHTML (target : [allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'reports', reportFiles: 'myreport.html', reportName: 'My Reports', reportTitles: 'The Report'])
        }
    }

}