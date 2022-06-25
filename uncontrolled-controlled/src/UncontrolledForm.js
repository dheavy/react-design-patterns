import React, { useState, useEffect } from 'react';

export const UncontrolledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hair, setHair] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    console.log(name);
    console.log(age);
    console.log(hair);
    e.preventDefault();
  };

  useEffect(() => {
    if (name.length && name.length < 2) {
      setError('Name must be at least 2 characters');
    } else {
      setError('');
    }
  }, [name]);

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input name="age" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input name="hairColor" type="text" placeholder="Hair Color" value={hair} onChange={(e) => setHair(e.target.value)} />
      <button name="submit">Submit</button>
    </form>
  );
};
