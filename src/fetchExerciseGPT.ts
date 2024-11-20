// interface message{
//   title :string,
// body :string,
// userId :number
// }

async function makePostRequest() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "practice request",
          body: `hello, guys`,
          userId: 2,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
