Feature: FeedBackS1 Test

@TC-24
Scenario: Verify error is displayed when user submits the empty feedback form
    Given I am on Hotels.com home page0222
    When I Click Sign in link01
    And I Click “Feedback” And Open PAge In New Tab02
    And I Click on Submit button04
    Then I Verify error message is displayed 01 Please fill in the required information highlighted below.
    And I Verify star boxes section is in a red dotted box.02


@TC-25
Scenario: Verify user can submit feedback after completing the feedback form
    Given I am on Hotels.com home page0222
    When I Click Sign in link01
    And I Click “Feedback” And Open PAge In New Tab02
    And I Select any star-rating01
    And I Enter any comments01
    And I Select any option for “How likely are you to return to Hotels.com”01
    And I Select any answer for “Prior to this visit, have you ever booked on Hotels.com”01
    And I Select any answer for ”Did you accomplish what you wanted to do on this page”01
    And I Click on Submit button05
    Then I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed01
