const userController = require("./controllers/userController");

module.exports = [
  {
    method: "GET",
    endpoint: "/",
    handler: userController.helloWorld,
  },
  {
    method: "GET",
    endpoint: "/users",
    handler: userController.listUsers,
  },
  {
    method: "POST",
    endpoint: "/users",
    handler: userController.createUser,
  },
  {
    method: "PUT",
    endpoint: "/users/:id",
    handler: userController.updateUser,
  },

  {
    method: "DELETE",
    endpoint: "/users/:id",
    handler: userController.deleteUser,
  },
];
