Feature: Sprint2 Test

@TC-17
Scenario: Verify past dates and back button on Current month's calendar is disabled
    Given I am on Hotels.com home page020202
    When I Click on Dates
    And I Go to current month if not displayed
    # Then I Verify For current month Past dates if any are disabled.
    # And I Verify Back button on current month is disabled

