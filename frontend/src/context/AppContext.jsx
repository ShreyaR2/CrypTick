import React, { createContext, useState, useEffect } from 'react';

// Create Context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty array ensures it runs only once when the component mounts

  return (
    <AppContext.Provider value={{ data }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };