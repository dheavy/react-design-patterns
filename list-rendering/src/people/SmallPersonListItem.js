export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;

  return (
    <div>Name: {name}, Age: {age} years</div>
  )
};
