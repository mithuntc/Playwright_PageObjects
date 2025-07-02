Feature: Ecommerce Test
    @Regression 
    Scenario Outline: Placing an order
        Given Login as a customer with "<username>" and "<password>"
        When I add an "<product_name>" to the cart
        Then Verify that the cart contains "<product_name>"
        When Enter valid details and place the order
        Then Verify that the order is placed successfully also verify the order details

        Examples:
            | username              | password |  product_name     |
            | apputc8@gmail.com     | Arya@123 |  ZARA COAT 3      |
            | getmidhuntc@gmail.com | Arya@123 |  ADIDAS ORIGINALS |
