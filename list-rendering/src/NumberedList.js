export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <h3>{i}</h3>
            <ItemComponent {...{ [resourceName]: item }} />
          </div>
        )
      })}
    </>
  );
};
