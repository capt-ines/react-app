function List() {
  const array = [
    { id: 1, name: "cessna", speed: 200 },
    { id: 2, name: "piper", speed: 280 },
    { id: 3, name: "beech", speed: 220 },
    { id: 4, name: "cirrus", speed: 330 },
  ];

  array.sort((a, b) => a.speed - b.speed);

  const listItems = array.map((plane) => {
    return <li key={plane.id}>{plane.name}</li>;
  });

  return <ul>{listItems}</ul>;
}

export default List;
