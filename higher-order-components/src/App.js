import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';
import { UserInfoForm } from './UserInfoForm';
import { UserInfoFormAlt } from './UserInfoFormAlt';

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '3456');

function App() {
  return (
    <>
      <UserInfoWrapped a={1} b={'foo'} />
      <UserInfoWithLoader />
      <UserInfoForm />
      <UserInfoFormAlt />
    </>
  );
}

export default App;
