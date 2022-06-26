import axios from 'axios';
import { useDataSource } from './useDataSource';

const serverResource = resourceUrl => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
}

export const UserInfoViaDataSource = ({ userId }) => {
  const user = useDataSource(serverResource(`/users/${userId}`));

  const {name, age, hairColor, hobbies} = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  ) : <p>Loading...</p>;
}
