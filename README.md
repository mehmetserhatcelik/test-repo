# Calculator Project

A simple Python calculator application with an intentional bug for testing SWE-Agent.

## Project Structure

- `calculator.py` - Core calculator module with arithmetic operations
- `main.py` - Main application that demonstrates the calculator functionality
- `README.md` - This file

## Features

The calculator supports the following operations:

- Addition (+)
- Subtraction (-)
- Multiplication (\*)
- Division (/)
- Power (\*\*)

## Known Bug

There is an intentional bug in the `divide()` function in `calculator.py`. The function doesn't properly handle division by zero cases. When dividing by zero, it should raise a `ZeroDivisionError` with a descriptive message, but currently it just lets Python's built-in division operator handle it (which raises a generic `ZeroDivisionError`).

## Running the Project

```bash
python main.py
```

## Expected Behavior

When running the application, the division by zero test should show a proper error message, but currently it shows the default Python `ZeroDivisionError` message.

## SWE-Agent Test Case

This project is designed to test SWE-Agent's ability to:

1. Identify the bug in the division function
2. Fix the division by zero handling
3. Add proper error handling with descriptive messages
