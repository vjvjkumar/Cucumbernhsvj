Feature: Upload resume in JOBS NHS Portal
  

  Scenario Outline: Verify JoBS NHS Login
    Given I open firefox "<browser>"
    When I navigate "appurl"
    Then I click on "logLink"
    Then I enter "logEmail" as "<UserName>"
    Then I enter "logPass" as "<Password>"
    And I click on "logButton"
    Then I got the "<Home>" page.

    Examples: 
      | browser | UserName      | Password    | Home         |
      | firefox | neelavijay102 | test123     | JOBS NHS     |
      | firefox | vcvijayk21    | selenium123 | My Home Page |
