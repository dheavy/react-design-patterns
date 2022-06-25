import { printProps } from './printProps';
import { UserInfo } from './UserInfo';

const UserInfoWrapper = printProps(UserInfo);

function App() {
  return (
    <UserInfoWrapper a={1} b={'foo'} />
  );
}

export default App;
