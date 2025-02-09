import React, { useState } from 'react';
import MultiInput from './MultiInput'; // Adjust the import path as needed

const Searchbar = () => {
  // Example options for the MultiInput
  const [options, setOptions] = useState<string[]>([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
  ]);

  // State to store selected values
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Handler for when selected values change
  const handleSelectedValuesChange = (values: string[]) => {
    setSelectedValues(values);
    console.log('Selected Values:', values);
  };

  return (
    <div>
      <h2>Searchbar with MultiInput</h2>
      <MultiInput
        options={options}
        onChange={handleSelectedValuesChange}
      />
      <div style={{ marginTop: '20px' }}>
        <strong>Selected Values:</strong>
        {selectedValues.length > 0 ? (
          <ul>
            {selectedValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        ) : (
          <p>No values selected.</p>
        )}
      </div>
    </div>
  );
};

export default Searchbar;