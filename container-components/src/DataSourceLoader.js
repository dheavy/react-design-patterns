import React, { useState, useEffect } from 'react';

export const DataSourceLoader = ({ resourceName, children, getDataFn = () => {} }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFn();
      setState(data);
      console.log(state)
    })();
  }, [getDataFn])

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
};
