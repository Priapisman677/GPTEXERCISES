"use strict";
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify({ title: 'practice request', body: `hello, guys`, userId: 2 })
}).then((response1) => {
    return response1.json;
}).then((response2) => {
    console.log(response2);
});
