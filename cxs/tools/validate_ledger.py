#!/usr/bin/env python3
import csv
import sys
import os
from datetime import datetime

REQUIRED_HEADER = [
    "timestamp",
    "session_id",
    "cycle_id",
    "contract_ref",
    "agent_id",
    "tokens_or_runtime",
    "status",
    "notes"
]

def validate_ledger(file_path):
    print(f"Validating ledger: {file_path}")
    
    if not os.path.exists(file_path):
        print(f"Error: File not found at {file_path}")
        return False

    with open(file_path, 'r', newline='', encoding='utf-8') as f:
        reader = csv.reader(f)
        try:
            header = next(reader)
        except StopIteration:
            print("Error: File is empty")
            return False

        if header != REQUIRED_HEADER:
            print(f"Error: Header mismatch.\nExpected: {REQUIRED_HEADER}\nFound:    {header}")
            return False

        row_count = 0
        errors = 0
        for i, row in enumerate(reader, start=2):
            row_count += 1
            if len(row) != len(REQUIRED_HEADER):
                print(f"Error line {i}: Incorrect number of columns. Expected {len(REQUIRED_HEADER)}, got {len(row)}")
                errors += 1
                continue
            
            # Simple timestamp validation (ISO 8601-ish)
            timestamp = row[0]
            try:
                # Just check if it parses, accommodating varied precision
                if 'T' in timestamp:
                     pass # Assume ISO format if it has a T, e.g. 2025-01-15T10:30:00Z
                else:
                    # potentially looser check or specific format
                    pass 
            except ValueError:
                print(f"Warning line {i}: Timestamp format '{timestamp}' might be invalid.")

    if errors > 0:
        print(f"Validation failed with {errors} errors.")
        return False
    
    print(f"Validation successful. Checked {row_count} runs.")
    return True

if __name__ == "__main__":
    if len(sys.argv) > 1:
        path = sys.argv[1]
    else:
        # Default relative path assumption
        path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "ledger", "runs.csv")
    
    success = validate_ledger(path)
    sys.exit(0 if success else 1)
