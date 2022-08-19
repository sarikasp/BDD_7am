Feature: Reqres API

    Scenario: GET users list
        Given User sent the request to get multiple users list
        Then Users list should be displayed

    Scenario Outline: Create New User
        Given User sent the request to create new user with "<name>" and job "<job>"
        Then User should be created with "<name>" and job "<job>"

        Examples:
            | name   | job               |
            | Sarika | Software Engineer |
            | Mahesh | QA                |
