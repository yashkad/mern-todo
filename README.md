
# Mern Stack Task Taker

To become more familiar with technologies like react.js, Mongodb, express.js, mongoose, Node.js, and redux, that was the major motivation behind developing this application.

I created an API that performs CRUD operations on the MongoDB database using node.js. And from the frontend, api calls are made with Axios.


## API Reference

#### Get all tasks

```http
  GET /api/tasks
```

#### Post task

```http
  POST /api/tasks
```
*JSON BODY Parameter*

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `task`      | `String` | **Required**. task Description  |
| `completed`| `Boolean` | *Optional*. |




#### Edit task

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id Required  |

#### Delete task

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id Required  |



## Screenshots

![App Screenshot](https://i.postimg.cc/WbCPZ7ZD/todotodo.png)


## Lessons Learned

- I've learned how to create Node.js APIs using Express.js.

- Acquired knowledge of node.js mongoose connectivity

- Acquired knowledge of CRUD operations in mongodb using apis. 

- I've learned to manage global state using hooks like useReducer and useContext.


- I've learned how to use axios to implement APIs in the frontend. js
 

- *Due to the reducer function's lack of support for async function calls and the inability to apply middleware with the useReducer hook, I encountered issues when developing this project.*

- and I've picked up quite a lot of knowledge while building this project.
## Authors

- [@Yash](https://www.github.com/yashkad)

