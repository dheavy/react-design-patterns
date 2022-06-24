export const LargeProductListItem = ({ products }) => {
  const { name, price, description, rating } = products;

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>{description}</h3>
      <p>{description}</p>
      <p>Average rating: {rating}</p>
    </>
  )
}
