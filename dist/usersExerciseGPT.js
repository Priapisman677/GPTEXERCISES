"use strict";
function getUserInfo(userId) {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((unParsedResponse) => {
        return unParsedResponse.json();
    })
        .then((parsedResponse) => {
        const user = parsedResponse.find((user) => { return user.id === userId; });
        //  console.log(typeof user.name);
        if (user === undefined) {
            console.log(`User with ID ${userId} not found`);
        }
        else {
            //  console.log("🚀 ~ .then ~ parsedResponse:", parsedResponse)
            console.log(user.name, user.email, user.address.city);
        }
    }).catch((error) => {
        console.error("Failed to fetch user data:", error);
    });
}
getUserInfo(90);
