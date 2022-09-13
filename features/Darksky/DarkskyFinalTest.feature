Feature: Darksky Final Test 

    @Test2
        Scenario: Verify DarkSky 2 Hour Gaps 
        Given I am on darksky.net123
        Then I Verify timeline has 12-data points with 2 hours gap from current hour




#             /**
#      * Question - 2: (40-points)
#      * 1. Launch darksky.net
#      * 2. Verify timeline has 12-data points with 2 hours gap from current hour
#      */
# ​
#     /**
#      * In case, you need to compare if two Arrays are identical using chai.
#      * 
#      * Use eql instead equal:
#      * expect(array1, 'Arrays are not identical').to.eql(array2);
#      * 
#      * eg:
#      * arr1 = [1, 2, 3];
#      * arr2 = [1, 2, 3];
#      * 
#      * expect(array1, 'Arrays are not identical').to.equal(array2);   // fails
#      * 
#      * expect(array1, 'Arrays are not identical').to.eql(array2);   // pass
#      * 
#      */


    @Test3
        Scenario: Verify DarkSky Test 2 
        Given I am on darksky.net1234
        When I Scroll to Today's timeline
        And I Click on plus button
        Then I Verify minTemp on and in Today's timeline is same
        Then I Verify maxTemp on and in Today's timeline is same


    #  * Question - 3: (20-points)
    #  * 1. Launch darksky.net
    #  * 2. Scroll to Today's timeline
    #  * 3. Click on + button
    #  * 4. Verify minTemp on and in Today's timeline is same
    #  * 5. Verify maxTemp on and in Today's timeline is same
    #  */
