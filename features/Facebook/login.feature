# Feature: Login

#     Scenario: Verify login fields are enabled by default
#     Given I am on facebook landing page
#     Then I verify login username field is enabled 
#     And I verify login password field is enabled 
#     And I verify login button is enabled 


# My Homework Below: 
Feature: Login

    Scenario: Verify login gets error on empty login form
    Given I am on facebook landing page
    When I click login button1
    Then I verify error is displayed1

# (error for reference -> The email address or mobile number you entered isn't connected to an account.)