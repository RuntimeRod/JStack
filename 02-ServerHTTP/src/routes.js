const userController = require("./controllers/userController");

module.exports = [
  {
    method: "GET",
    endpoint: "/users",
    handler: userController.listUsers,
  },
  {
    method: "GET",
    endpoint: "/users/id",
    handler: userController.listUsers,
  },
];
