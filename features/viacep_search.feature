Feature: Viacep search
  Find address informotion by CEP number.

  Scenario: Find address information with correctly number.
    Given access to the Viacep page
    When fill in the cep field with '85015410'
    And click on the find cep data button
    Then should be see success cep searched message