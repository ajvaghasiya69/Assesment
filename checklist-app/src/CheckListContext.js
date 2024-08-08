import React, { createContext, useState } from 'react';

// Create a context
export const ChecklistContext = createContext();

// Create a provider component
export const ChecklistProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState({
    isCitizen: false,
    hasDrivingLicense: false,
    isEmployed: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <ChecklistContext.Provider value={{ checkedItems, handleCheckboxChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};
