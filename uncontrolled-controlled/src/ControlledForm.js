import { useRef } from 'react';

export const ControlledForm = ({ error, onSubmit = ({ name, age, hairColor }) => {}}) => {
  const name = useRef('');
  const age = useRef('');
  const hairColor = useRef('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!error) {
      onSubmit({
        name: name.current.value,
        age: age.current.value,
        hairColor: hairColor.current.value
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input name="name" type="text" placeholder="Name" ref={name} />
      <input name="age" type="number" placeholder="Age" ref={age} />
      <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColor} />
      <button name="submit">Submit</button>
    </form>
  );
};
