//Write an async function that fetches a random user from this free API:
//https://jsonplaceholder.typicode.com/users/1
//Use fetch() inside an async function.
//Await the response and convert it to JSON.
//Log only the user’s name.

const fetchUserName = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  console.log(response);

  const data = await response.json();
  console.log(data);
  console.log(`name: ${data.name}`);
};

fetchUserName();
