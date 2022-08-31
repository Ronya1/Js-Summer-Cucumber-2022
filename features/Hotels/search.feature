Feature: Search 

    @hotels-1
    Scenario: Verify search location is displayed on Search page - 1
        Given I am on hotles landing page 
        When I enter "new" in going to 
        And I select "Manhattan" from auto-suggestion
        And I click on search button 
        Then I verify going to location containts "Manhattan"


    @hotels-2 @sanity
    Scenario: Verify search location is displayed on Search page - 2
        Given I am on hotles landing page 
        When I enter "new" in going to 
        And I select "Manhattan" from auto-suggestion
        And I click on search button 
        Then I verify going to location containts "Manhattan"


    @hotels-3
    Scenario: Verify search location is displayed on Search page - 3 
        Given I am on hotles landing page 
        When I enter "new" in going to 
        And I select "Manhattan" from auto-suggestion
        And I click on search button 
        Then I verify going to location containts "Manhattan"