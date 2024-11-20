interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  
}

function getUserInfo(userId: number) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((unParsedResponse) => {
      return unParsedResponse.json();
    })
    .then((parsedResponse: User[]) => {

       const user = parsedResponse.find((user):boolean=>{return user.id === userId}) as User
      //  console.log(typeof user.name);
       if (user === undefined){
        console.log(`User with ID ${userId} not found`)
       } else{
        //  console.log("🚀 ~ .then ~ parsedResponse:", parsedResponse)
       console.log(user.name, user.email, user.address.city, )
       }
      
      
    }).catch((error)=>{
      console.error("Failed to fetch user data:", error);
    })
}

getUserInfo(90);