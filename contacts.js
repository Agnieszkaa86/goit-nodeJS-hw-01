const fs = require("fs").promises;
const path = require("path");
//const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

const listContacts = async () => {
  try {
    const readContacts = await fs.readFile(contactsPath);
    return JSON.parse(readContacts);
  } catch (error) {
    console.error("Load error", error.message);
  }
};
const getContactById = async (contactId) => {
  try {
    const readContacts = await fs.readFile(contactsPath);
    const jsonContacts = await JSON.parse(readContacts);
    return jsonContacts.filter((cont) => cont.id === contactId);
  } catch (error) {
    console.error("Get contact error", error.message);
  }
};
module.exports = {
  listContacts,
  getContactById
};
    