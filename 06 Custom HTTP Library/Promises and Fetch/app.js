const http = new EasyHTTP();

//GET
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//POST
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com",
};

http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//DELETE
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/*
Here we use ES6 classes, fetch API and promises instead of callback.

As you already know Callbacks => Promises is by:

callback(err, msg)

TO

return new Promise((res,rej)=>...)

This above line will return a promise(Unresolved)
Wrap the line which will return this pormise with then and catch.

Depending upon resolve/reject the then/catch will be executed
*/
