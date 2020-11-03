const http = new easyHTTP;

// GET
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// POST
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});



/*
  Without callbacks, the function will be popped off the callstack without returning anything.
  Hence in the callback where XHR loads the data, as soon as data in fetched, call the 
  callback immediately. Look at lib.js for more details
*/