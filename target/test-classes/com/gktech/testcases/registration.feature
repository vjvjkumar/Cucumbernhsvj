Feature: Upload resume in JOBS NHS
In order to upload resume
register in the JOBS NHS Portal 

Scenario Outline: Register JOBS NHS

Given I open firefox "<browser>"
When I navigate "appurl"
Then I click on "regLink"
Then I enter "regFName" as "<RegFName>"
Then I enter "regSurname" as "<RegSurName>"
Then I enter "regCountry" as "<RegCountry>"
Then I enter "regEmail" as "<RegEmail>"

Then I enter "regEmailConf" as "<RegEmailConf>"
Then I enter "regPass" as "<RegPass>"
Then I enter "regPassConf" as "<RegPassConf>"
Then I enter "regSecuQues" as "<RegSecuQues>"
Then I enter "regSecuAns" as "<RegSecuAns>"
Then I click on "regCheckbox" 
Then I click on "regCreate"


Examples:

|browser 	|RegFName	|RegSurName	|RegCountry	|RegEmail				|RegEmailConf			|RegPass |RegPassConf |RegSecuQues		 |RegSecuAns |
|Firefox	|vijay		|kumar		|London		|vcvijayk21@gmail.com	|vcvijayk21@gmail.com	|test123 |test123	  |A memorable place?|swiss		 |
|Firefox	|govardhan	|karnati	|India		|govardhan@gmail.com	|govardhan@gmail.com	|java123 |java123	  |A memorable place?|singapore	 |		