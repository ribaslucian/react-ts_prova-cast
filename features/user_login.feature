Feature: User Login
  Feature to authenticate the user to the system.

  Scenario: Login with all credentials correctly.
    Given access to the login page
    When fill in the email field with 'ribas.lucian@gmail.com'
    And fill in the password field with '123'
    And click on the 'LoginButton' button
    Then should be redirected to the dashboard page

  # Scenario: Login with invalid email
  #   Given access to the login page
  #   When fill in the email field with 'ribasluciangmail.com'
  #   Then should seethe message 'Revise seu e-mail, este parece não estar certo.'