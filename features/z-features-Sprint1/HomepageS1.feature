Feature: HomepageS1 Test

@sprint1
Scenario: Verify user can update number of guests on Home page
    Given I am on Hotels.com home page0211
    When I Click on Travelers
    And I Select “Adults" as 6 
    And I Select “Children” as 3
    And I Select first child age: 4
    And I Select second child age: Under 1
    And I Select third child age: 7
    And I Click Done
    Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.
