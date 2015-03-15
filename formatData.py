__author__ = 'Krismy Alfaro'

# formatData.py
#
# This script is used to format the data that was gained from
# http://www.ucrdatatool.gov. The original data from this site is stored in
# CrimeStateByState.csv. The output will be contained in the FormattedData.csv file
#

import re
import csv

# open up the file to be read and create a csv reader
f_original = open('CrimeStateByState.csv')
csv_f = csv.reader(f_original)


# headers to be used in the data file
header = ["State", "Year", "Murder Rate", "Robbery Rate"]

# open up and create the file where we will place our formatted data and create header
f_formatted = open('FormattedData2.csv', 'w+')
writer = csv.DictWriter(f_formatted, fieldnames=header, lineterminator='\n')
writer.writeheader()

for row in csv_f:
    # dont bother to do anything if row is empty:
    if len(row) != 0:
        # check to see if match was found, if it was get the state
        if re.match("^Estimated crime in ", row[0]) is not None:
            # gets just the state name from the string
            state = row[0].split('Estimated crime in', 1)
            state = state[1]

            continue

        # only get data if it doesnt begin with a word or a special character
        if re.match("[a-zA-Z|\W]", row[0]) is None:
            # create each row with the only the relevant data
            writer.writerow({'State': state, 'Year': row[0], 'Murder Rate': row[12], 'Robbery Rate': row[14]})

# close the files that we opened up
f_formatted.close()
f_original.close()