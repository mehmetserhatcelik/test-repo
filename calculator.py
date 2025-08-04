"""
Simple Calculator Module
A basic calculator with arithmetic operations
"""

def add(a, b):
    """Add two numbers"""
    return a + b

def subtract(a, b):
    """Subtract b from a"""
    return a - b

def multiply(a, b):
    """Multiply two numbers"""
    return a * b

def divide(a, b):
    """Divide a by b"""
    return a / b

def power(a, b):
    """Raise a to the power of b"""
    return a ** b

def calculate(operation, a, b):
    """Main calculation function that routes to appropriate operation"""
    operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
        '**': power
    }
    
    if operation not in operations:
        raise ValueError(f"Unsupported operation: {operation}")
    
    return operations[operation](a, b) 