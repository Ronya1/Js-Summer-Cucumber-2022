Feature: Hotels Test Feature

    @Test1
    Scenario: Verify Hotels Rewards Feature 
        Given I am on hotels homepage123
        When I Click on Learn about Hotels.com Rewards
        Then I verify Hotels Rewards opened in a new window
        When I Click on Join Now
        Then I Verify Form is blank123
        Then I Verify Continue button is NOT enabled




    #         /**
    #  * Question - 1: (40-points)
    #  * 1. Launch hotels.com
    #  * 2. Click on Learn about Hotels.com Rewards
    #  * 3. -> Verify Hotels Rewards opened in a new window
    #  * 4. Click on Join Now
    #  * 5. -> Verify Form is blank
    #  * 6. -> Verify Continue button is NOT enabled
    #  */