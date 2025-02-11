# TypeScript 'unknown' Type Error Handling Bug

This repository demonstrates a common, subtle error when using TypeScript's `unknown` type for error handling.  The `handleError` function aims to provide specific error messages based on the error type, but it doesn't comprehensively handle all possible `unknown` scenarios.

## The Bug

The `handleError` function correctly handles `string` and `Error` types. However, if a non-string and non-Error type (like a number) is passed to it, the default 'An unexpected error occurred' message appears, which might not be helpful for debugging.

## Solution

The solution involves enhancing the error handling to potentially consider additional types or offer a more informative default message that includes the type of the unknown error. This will give more context for improved debugging.

## How to Reproduce

1. Clone this repository.
2. Compile and run the `bug.ts` file using a TypeScript compiler.
3. Observe the output in the console.  Note the generic error message for the numeric input.