import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '3456');

function App() {
  return (
    <>
      <UserInfoWrapped a={1} b={'foo'} />
      <UserInfoWithLoader />
    </>
  );
}

export default App;
