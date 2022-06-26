import { withEditableUser } from './withEditableUser';

export const UserInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
  const { name, age, hairColor } = user || {};

  return user ? (
    <>
      <label>Name:</label>
      <input value={name} type="text" onChange={(e) => onChangeUser({ name: e.target.value })} />
      <label>Age:</label>
      <input value={age} type="number" onChange={(e) => onChangeUser({ age: +e.target.value })} />
      <label>Hair color:</label>
      <input value={hairColor} type="text" onChange={(e) => onChangeUser({ hairColor: e.target.value })} />
      <button onClick={onResetUser}>Reset</button>
      <button onClick={onSaveUser}>Save</button>
    </>
  ) : <p>Loading...</p>;
}, '2345');
