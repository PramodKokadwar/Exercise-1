
Feature: Wiki Page  

    Feature wiki page to search text
    
    Background:
        Given A user opens a wiki website  
    Scenario: Navigate to Wiki website and Search Apollo 11
        When A user search "Apollo 11"
        And A user click on search button
        Then A user will get search result apollo 11 
 