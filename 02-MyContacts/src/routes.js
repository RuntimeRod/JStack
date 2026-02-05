const { Router } = require("express");
const router = Router();
const ContactController = require("./app/controllers/contactController");

router.get("/", (request, response) => {
  response.send("hello world 3");
});

router.get("/contacts", ContactController.index);
module.exports = router;
