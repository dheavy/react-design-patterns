import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { DataSourceLoader } from './DataSourceLoader';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';
import axios from 'axios';

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

function App() {
  return (
    <>
      <UserLoader userId="3456">
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl="/users/2345" resourceName="user">
        <UserInfo />
      </ResourceLoader>

      <DataSourceLoader
        getDataFn={getServerData('/products/1234')}
        resourceName="product"
      >
        <ProductInfo />
      </DataSourceLoader>
    </>
  );
}

export default App;
