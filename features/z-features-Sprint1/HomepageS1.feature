Feature: HomepageS1 Test

@TC-18
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



@TC-20
Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
    Given I am on Hotels.com home page0211
    When I Click Sign in link
    And I Click Sign up link
    And I Click “Terms and Conditions” link
    Then I Verify “Terms and Conditions” page opens in new tab
    And I Click “Privacy Statement” link
    Then I Verify “Privacy Statement” page opens in new tab


@TC-21
Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
    Given I am on Hotels.com home page0211
    When I Click Sign in link
    And I click Sign in
    And I Enter invalid email address0211
    And I Enter invalid password
    And I Click on Sign in button
    Then I Verify Verification message is displayed.


@TC-22
Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
    Given I am on Hotels.com home page0211
    When I Click Sign in link
    And I Click Sign up link
    And I Enter invalid email address with at least @ symbol #!@###
    Then I Verify error is displayed Enter a valid email address
    And I Enter invalid first name !@
    Then I Verify error is displayed First name cannot contain special characters
    And I Enter invalid last name %<&
    Then I Verify error is displayed Last name cannot contain special characters
    And I Enter password 
    Then I Verify “Keep me signed in” checkbox is displayed and enabled
    # And I Verify “Continue” button is displayed but NOT enabled


