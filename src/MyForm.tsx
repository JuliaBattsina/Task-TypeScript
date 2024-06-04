import React, { useState } from 'react';


interface FormProps {
  onSubmit: (inputValue: string, selectValue: string) => void;
}

function MyForm({ onSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('user');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputValue, selectValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Enter GitHub Username or Repository:</label><br />
      <input
        type="text"
        id="inputField"
        name="inputField"
        value={inputValue}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="selectType">Select type:</label><br />
      <select
        id="selectType"
        name="selectType"
        value={selectValue}
        onChange={handleSelectChange}
      >
        <option value="user">User</option>
        <option value="repo">Repository</option>
      </select><br /><br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;