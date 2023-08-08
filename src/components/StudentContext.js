// StudentContext.js
import React, { createContext, useState } from 'react';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [studentData, setStudentData] = useState([]);

  return (
    <StudentContext.Provider value={{ studentData, setStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
