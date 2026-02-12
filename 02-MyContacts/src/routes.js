const { Router } = require("express");
const router = Router();
const ContactController = require("./app/controllers/contactController");

router.get("/", (request, response) => {
  response.send("hello world 3");
});

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts/", ContactController.store);
module.exports = router;
