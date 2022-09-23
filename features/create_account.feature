Feature: Create account.
  Feature to user create account.

  Scenario: Create account with correctly datas.
    Given access to the account page
    When fill in the name field with 'Conta BDD'
    And fill in the description field with 'Descrição BDD'
    And click on the 'CreateContaButton' button
    Then should be see success message