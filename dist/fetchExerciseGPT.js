"use strict";
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify({ title: 'practice request', body: `hello, guys`, userId: 2 })
});