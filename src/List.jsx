function List({ category, items }) {
  const listItems = items.map((item) => {
    return (
      <li key={item.id}>
        {item.name}, {item.prop}
      </li>
    );
  });
  return (
    <>
      <h2>{category}</h2>
      <ul>{listItems}</ul>
    </>
  );
}
export default List;
