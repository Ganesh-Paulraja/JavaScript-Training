const data1 = {
    "id": 1,
    "title": "His mother had always taught him",
    "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    "tags": [
        "history",
        "american",
        "crime"
    ],
    "reactions": {
        "likes": 192,
        "dislikes": 25
    },
    "views": 305,
    "userId": 121
}


// const fetchApi = () => {
//     fetch('https://dummyjson.com/posts/add', {
//         method: post
//     })
//         .then(res => console.log(res))
//         .then(err => console.log(err))
// }
// fetchApi()

//context api todo
// redux js  working

// fetch('https://dummyjson.com/posts/')
//   .then(response => response.json())
//   .then(data => console.log('GET:', data))
//   .catch(error => console.error('Error:', error));


// fetch('https://dummyjson.com/posts/add', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title: 'New Post',
//       body: 'This is the content of the new post.',
//       userId: 1
//     })
//   })
//     .then(response => response.json())
//     .then(data => console.log('POST:', data))
//     .catch(error => console.error('Error:', error));

// fetch('https://dummyjson.com/posts/update', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       id: 1,
//       title: 'Updated Post',
//       body: 'This is the updated content.',
//       userId: 1
//     })
//   })
//     .then(response => response.json())
//     .then(data => console.log('PUT:', data))
//     .catch(error => console.error('Error:', error));

fetch('https://dummyjson.com/posts/delete', {
    method: 'DELETE'
  })
    .then(() => console.log('DELETE: Resource deleted'))
    .catch(error => console.error('Error:', error));
  
  