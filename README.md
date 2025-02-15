# Type 'string' is not assignable to type 'number'

This TypeScript code demonstrates a common type error: assigning a string value to a variable with a number type.

## Bug

The `bug.ts` file contains a function that expects two number arguments. However, due to a type mismatch (a string being passed as an argument), the compiler will raise a type error. This is a common error when dealing with user input, data from external sources, or implicit type conversions.

## Solution

The `bugSolution.ts` file shows how to fix this by explicitly checking and converting the data type using type guards or by using a more flexible type like 'number | string'. The solution focuses on input validation to prevent this type mismatch from occurring.