import { CurrentUserInfo } from './CurrentUserInfo';
import { UserInfo } from './UserInfo';
import { UserInfoViaResourceLoader } from './UserInfoViaResourceLoader';
import { UserInfoViaDataSource } from './UserInfoViaDataSource';

function App() {
  return (
    <>
      <CurrentUserInfo />
      <UserInfo userId='3456' />
      <UserInfoViaResourceLoader userId='2345' />
      <UserInfoViaDataSource userId='3456' />
    </>
  );
}

export default App;
