# /**
#  * Complete the automation using POM design
#  * 
#  * Due: Aug-24 (Wed)
#  * 
#  */

# /**
#  * Tc-1:
#  * 
#  * hotels.com
#  * Verify past dates of the current month is not enabled
#  */

Feature: Homepage

    Scenario: Verify past dates of the current month is not enabled
        Given I am on Hotels landing page 
        When I click date drop down menu
        Then I verify past dates are not enabled 


# /**
#  * Tc-2:
#  * 
#  * Verify destination and check-in and check-out dates are as user selected
#  * 
#  * 1. Launch hotels.com
#  * 2. Type "man" in destination
#  * 3. Select "Manila" from auto-suggestion
#  * 4. Select tomorrow's date as check-in date (Aug-23)
#  * 5. Select 5 days from check-in as check-out (Aug-28)
#  * 5. Click Search button
#  * 6. Verify destination has Manila
#  * 7. Verify check-in date is tomorrow's date
#  * 8. Verify check-out date in 5-days from check-in date
#  * 
#  */


    Scenario: Verify past dates of the current month is not enabled
        Given I am on Hotels landing page 
        When I typle in "man" in destination And Select "Manila" from auto-suggestion
        # And I select "Manila" from auto-suggestion
        And I select tomorrow's date as check-in date and I Select 5 days from check-in as check-out and Click Search button
        # And I Select 5 days from check-in as check-out 
        # And I Click Search button
        Then I Verify destination has Manila And I Verify check-in date is tomorrow's date And I Verify check-out date in 5-days from check-in date
        # And I Verify check-in date is tomorrow's date
        # And I Verify check-out date in 5-days from check-in date