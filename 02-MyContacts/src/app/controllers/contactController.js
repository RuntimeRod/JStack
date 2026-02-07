const { response } = require("express");
const ContactsRepository = require("../repositories/ContactsRepository");
class ContactController {
  index(request, response) {
    //listar todos os registros, estilo o listUser do modulo 1
    const contacts = ContactsRepository.findAll();
    response.json(contacts);
  }

  async show() {
    //Listar um unico registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    }

    response.json(contact);
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
