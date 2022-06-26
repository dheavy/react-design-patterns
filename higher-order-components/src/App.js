import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';
import { UserInfoForm } from './UserInfoForm';

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '3456');

function App() {
  return (
    <>
      <UserInfoWrapped a={1} b={'foo'} />
      <UserInfoWithLoader />
      <UserInfoForm />
    </>
  );
}

export default App;
