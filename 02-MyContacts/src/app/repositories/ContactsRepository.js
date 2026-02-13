const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Matheus",
    email: "m@gmail.com",
    phone: "123456",
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      contacts.find((contact) => contact.email === email);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve();
    });
  }
}
module.exports = new ContactsRepository();
