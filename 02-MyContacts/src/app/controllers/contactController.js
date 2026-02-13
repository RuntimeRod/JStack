const { response } = require("express");
const ContactsRepository = require("../repositories/ContactsRepository");
class ContactController {
  async index(request, response) {
    //listar todos os registros, estilo o listUser do modulo 1
    const contacts = await ContactsRepository.findAll();
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

  async store(request, response) {
    //Criar novo registro
    const { email, name, category_id, phone } = request.body;

    const contactExists = await ContactsRepository.findByEmail(email);
    if (contactExists) {
      return response.status(400).json({ error: "Email already taken" });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact)
  }

  update() {
    //Atualizar um registro
  }

  async delete(request, response) {
    //Deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    }
    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
