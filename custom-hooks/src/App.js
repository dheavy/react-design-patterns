import { CurrentUserInfo } from './CurrentUserInfo';
import { UserInfo } from './UserInfo';
import { UserInfoViaResourceLoader } from './UserInfoViaResourceLoader';

function App() {
  return (
    <>
      <CurrentUserInfo />
      <UserInfo userId='3456' />
      <UserInfoViaResourceLoader userId='2345' />
    </>
  );
}

export default App;
