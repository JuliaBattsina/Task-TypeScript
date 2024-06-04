import React, { useState } from 'react';
import './App.css';
import Inform from './Inform';
import MyForm from './MyForm';

function App() {
  const [wordSubmitted, setWordSubmitted] = useState<{ inputValue: string; selectValue: string }>({
    inputValue: '',
    selectValue: 'user',
  });

  const handleSubmitForm = (inputValue: string, selectValue: string) => {
    setWordSubmitted({ inputValue, selectValue });
  };

  return (
    <div className="App">
      <MyForm onSubmit={handleSubmitForm} />
      <Inform wordSubmitted={wordSubmitted} />
    </div>
  );
}

export default App;