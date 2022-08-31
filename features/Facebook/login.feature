# Feature: Login

#     Scenario: Verify login fields are enabled by default
#     Given I am on facebook landing page
#     Then I verify login username field is enabled 
#     And I verify login password field is enabled 
#     And I verify login button is enabled 


    Scenario: Verify user get error for invlaid credentials 
        Given I am on facebook landing page
        When I enter "#$%^&" as username
        And I enter "invlaidPwd" as password
        And I click login button 
        Then I verify error is displayed

    Scenario: Verify user get error for valid credentials 
        Given I am on facebook landing page
        When I enter "deepak@facebook.com" as username
        And I enter "validPwd@1234" as password
        And I click login button 
        Then I verify I am on Homepage





# My Homework Below: 
Feature: Login

    Scenario: Verify login gets error on empty login form
    Given I am on facebook landing page
    When I click login button1
    Then I verify error is displayed1

# (error for reference -> The email address or mobile number you entered isn't connected to an account.)