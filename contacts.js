const fs = require("fs").promises;
const path = require("path");
// const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

const listContacts = async () => {
  try {
    const readContacts = await fs.readFile(contactsPath);
    return JSON.parse(readContacts);
  } catch (error) {
    console.error("Load error", error.message);
  }
};
module.exports = {
    listContacts
};
    