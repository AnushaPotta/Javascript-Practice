//Write a function that fetches the names of users with IDs 1, 2, and 3 from this API:
//https://jsonplaceholder.typicode.com/users/{id}
//Use async/await.

//Use Promise.all() to fetch all users in parallel.

//Return an array of user names:Example output:

//["Leanne Graham", "Ervin Howell", "Clementine Bauch"]

const fetchMultiUsers = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return data.name;
};

const fetchAll = async () => {
  const promises = [1, 2, 3].map((id) => fetchMultiUsers(id));
  const data = await Promise.all(promises);
  console.log(data);
};

fetchAll();
