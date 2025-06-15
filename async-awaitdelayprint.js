//Write an async function delayedPrint that:
//Waits for 2 seconds.

//Then prints "Hello after 2 seconds" to the console.

const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const delayedPrint = async () => {
  await wait(2000);
  console.log("hello after 2 sec");
};

delayedPrint();
