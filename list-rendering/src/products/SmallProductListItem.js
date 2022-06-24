export const SmallProductListItem = ({ products }) => {
  const { name, price } = products;

  return (
    <h3>{name} - {price}</h3>
  );
};
