Feature: Sprint2 Test

@TC-17
Scenario: Verify past dates and back button on Current month's calendar is disabled
    Given I am on Hotels.com home page020202
    When I Click on Dates
    And I Go to current month if not displayed
    # Then I Verify For current month Past dates if any are disabled.
    And I Verify Back button on current month is disabled

@TC-29
Scenario: Verify "List your Property" flow
    Given I am on Hotels.com home page020202
    When I Click on “List your property”
    Then I Verify “What would you like to list” is displayed"
    # And I Verify “Lodging“ and “Private residence“ options are displayed
    # When I Click on “Private residence“
    # Then I Verify ”Step 1 of 3” is displayed
    # And I Verify “See how much you could earn!” is displayed
    # When I Enter “4“ as bedroom and Enter “2.5“ as bathroom
    # And I Click on “Next” button
    # Then I Verify ”Step 2 of 3” is displayed
    # And I Verify “Where is your property located?” is displayed
    # When I Enter “121” in address
    # And I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
    # Then I Verify graph is displayed
    # And I Verify pin in graph is displayed
    # And I Verify “Pin location may not be exact.“ is displayed below graph


