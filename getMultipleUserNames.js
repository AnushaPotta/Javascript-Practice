//Using async/await, fetch data for three users (with IDs 1, 2, and 3) from the API:

//https://jsonplaceholder.typicode.com/users/{id}
//Then print their names to the console.

const fetchData = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  console.log(`user ${id}: ${data.name}`);
};

const fetchAll = async () => {
  await fetchData(1);
  await fetchData(2);
  await fetchData(3);
};

fetchAll();
