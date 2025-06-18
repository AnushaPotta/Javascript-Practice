//Write an async function that:

//Takes a postId as an argument.

//Fetches all comments for that post from:
//https://jsonplaceholder.typicode.com/comments?postId=${postId}

//Logs the total number of comments.

//Also logs the email addresses of all commenters.

const fetchComments = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  const data = await response.json();
  console.log(`Total number of commenters : ${data.length}`);
  console.log("Emails: ");
  data.forEach((currValue, index) => {
    console.log(`- ${currValue.email}`);
  });
};
fetchComments(1);
