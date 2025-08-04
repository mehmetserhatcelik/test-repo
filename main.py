#!/usr/bin/env python3
"""
Main Calculator Application
Demonstrates the calculator functionality
"""

from calculator import calculate

def main():
    """Main function to demonstrate calculator operations"""
    print("Simple Calculator Demo")
    print("=" * 30)
    
    # Test various operations
    test_cases = [
        (10, 5, '+', "Addition"),
        (10, 5, '-', "Subtraction"),
        (10, 5, '*', "Multiplication"),
        (10, 5, '/', "Division"),
        (2, 3, '**', "Power"),
    ]
    
    for a, b, op, description in test_cases:
        try:
            result = calculate(op, a, b)
            print(f"{description}: {a} {op} {b} = {result}")
        except Exception as e:
            print(f"{description}: {a} {op} {b} = Error: {e}")
    
    print("\n" + "=" * 30)
    print("Testing division by zero (this should be handled properly):")
    
    
    result = calculate('/', 10, 0)
    print(f"10 / 0 = {result}")


if __name__ == "__main__":
    main() 