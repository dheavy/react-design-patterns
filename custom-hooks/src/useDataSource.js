import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDataSource = getResourceFn => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFn();
      setResource(result);
    })();
  }, [getResourceFn]);

  return resource;
};
