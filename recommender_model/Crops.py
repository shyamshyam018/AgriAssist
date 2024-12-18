import pandas as pd

# Load the CSV file into a DataFrame
df = pd.read_csv('indiancrop_dataset.csv')

# Specify the column you want to extract unique values from
column_name = 'CROP'

# Get unique names from the specified column
unique_names = df[column_name].unique()

# Print the unique names
print("Unique Names in column", column_name, ":")
for name in unique_names:
    print(name)
