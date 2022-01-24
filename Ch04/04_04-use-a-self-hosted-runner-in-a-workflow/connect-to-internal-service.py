#!/bin/env python3
import uuid
import time
import random
import string

# This function simulates connecting to an internal service
def connect():
  return ''.join(random.choice(string.ascii_letters) for i in range(10))

# Run the process 100 times
for i in range(0, 100):

    # Report each round of the process
    print(f"# Secret process round {i}")

    # Connect to the internal system for the input value
    input_value = connect()

    # Generate the secret value
    secret_value = uuid.uuid4()
    time.sleep(1)

    # Print the results of the process
    print(f"\t\tInput value  : {input_value}")
    print(f"\t\tSecret value : {secret_value}\n")
