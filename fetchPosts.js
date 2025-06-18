//You’ll fetch all posts made by a user from an API and display their titles.

//https://jsonplaceholder.typicode.com/posts?userId=1

const fetchPosts = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const data = await response.json();
  console.log(`Posts by User ${id}:`);
  data.forEach((currValue, index) => {
    console.log(`- ${currValue.title}`);
  });
};
fetchPosts(1);
