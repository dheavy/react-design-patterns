import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

function App() {
  return (
    <>
      <UserLoader userId="3456">
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl="/users/2345" resourceName="user">
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl="/products/2345" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
