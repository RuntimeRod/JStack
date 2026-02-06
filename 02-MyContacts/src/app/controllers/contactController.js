const ContactsRepository = require("../repositories/ContactsRepository");
class ContactController {
  index(request, response) {
    //listar todos os registros, estilo o listUser do modulo 1
    const contacts = ContactsRepository.findAll();
    response.json(contacts);
  }

  show() {
    //Listar um unico registro
  }

  store() {
    //Criar novo registro
  }

  update() {
    //Atualizar um registro
  }

  Delete() {
    //Deletar um registro
  }
}

module.exports = new ContactController();
