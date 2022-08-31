Feature: Login

    # Scenario: Verify login fields are enabled by default
    #     Given I am on facebook landing page
    #     Then I verify login username field is enabled
    #     And I verify login password field is enabled
    #     And I verify login button field is enabled

    Scenario: Verify user get error for invalid credentials
        Given I am on facebook landing page
        When I enter "@#$%^^^" as username
        And I enter "invalidPwd" as password
        And I click login button
        Then I verify error is displayed

    # Scenario: Verify user get error for valid credentials
    #     Given I am on facebook landing page
    #     When I enter "deepak@facebook.com" as username
    #     And I enter "validPwd@1234" as password  
    #     And I click login button 
    #     Then I verify I am on Homepage

        # The below 2 lines I changed to when as its not working with And and doesnt match 
        # And I enter "validPwd@1234" as password  
        # And I click login button 


#         # My Homework Below: 
# Feature: Login

#     Scenario: Verify login gets error on empty login form
#     Given I am on facebook landing page
#     When I click login button1
#     Then I verify error is displayed1

# # (error for reference -> The email address or mobile number you entered isn't connected to an account.)