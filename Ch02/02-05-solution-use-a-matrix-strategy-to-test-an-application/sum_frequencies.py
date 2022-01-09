'''
This script sums the occurence of frequencies in the data set.

The following frequencies are expected:
    "Never"
    "Once"
    "Yearly"
    "Seldom"
    "Often"
    "Monthly"
    "Weekly"
    "Daily"
'''
from os.path import exists
import sys
import json
import bios

try:
    data_file = sys.argv[1]
except IndexError:
    sys.exit('ERROR: Input file not given.')

if exists(data_file):
    data = bios.read(data_file)
else:
    sys.exit(f'ERROR: Input file {data_file} does not exist or can not be read')

frequencies = {}

for item in data:
    frequency = item['frequency']

    if frequency in frequencies:
        frequencies[frequency] += 1
    else:
        frequencies[frequency] = 1

print(json.dumps(frequencies))
