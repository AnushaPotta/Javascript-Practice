//Use async/await to fetch user data for IDs 1 through 3 and print both their names and emails in the format:

//User: Leanne Graham | Email: Sincere@april.biz
//User: Ervin Howell | Email: Shanna@melissa.tv
//User: Clementine Bauch | Email: Nathan@yesenia.net

//https://jsonplaceholder.typicode.com/users/<id>

const fetchData = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  //return {name:data.name, email: data.email};
  return `Name :${data.name} | Email: ${data.email}`;
};

const fetchAll = async () => {
  const promises = [1, 2, 3].map((id) => fetchData(id));
  const data = await Promise.all(promises);
  //console.log(data);
  data.forEach((currentValue, index) => {
    console.log(`User ${index + 1}: ${currentValue}`);
  });
};
fetchAll();
