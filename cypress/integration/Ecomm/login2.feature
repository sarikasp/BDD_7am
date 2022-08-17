Feature: Practice Automation Site

    Scenario: Login with Valid Credentilas
        Given visit ecommerce Site
        When enter the username
            | username |
            | student  |
        And enter the password
            | password    |
            | Password123 |
        And Click on login button
        Then Validate Dashboard

    Scenario Outline: Login with multiple Users
        Given visit Practice Automation Testing Site
        When User login with "<username>" and "<password>"
        And Click on the login button
        Then Dashboard should be visible

        Examples:
            | username        | password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | Arjun@test.com  | Arjun@12    |

