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

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
