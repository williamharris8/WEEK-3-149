PHASE 1 - A function declaration uses the function keyword followed by the name. Expression creates the function as a value and assigns it to a variable.

PHASE 2 - running defaultTaxRate I received a ReferenceError that it couldn't find the variable. This only exists inside the function body so outside code doesnt know the name refers to anything.

PHASE 3 - Arrow functions drop the function keyword, {} and the return. In theory it should be easier to read and in short operations maybe they are. But I have just gotten used to reading traditional functions though.

PHASE 4 - It's higher order because its taking another function as an argument and calls it. studentDiscount and seniorDiscount were the callbacks that held math. Creating a noDiscount function if neither student or senior applies, just return the total unchanged.