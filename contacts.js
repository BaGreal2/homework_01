const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve(__dirname, "db/contacts.json");

function listContacts() {
    fs.readFile(contactsPath).then((response) =>{
        const contacts = JSON.parse(response);
        console.table(contacts);
    })
  } 

  function getContactById(contactId) {
    fs.readFile(contactsPath).then((response) =>{
        const contacts = JSON.parse(response);
        contacts.find((elem)=>{
            if (elem.id == contactId){
                console.table(elem);
            }
        });
    })
  }
  
  function removeContact(contactId) {
    fs.readFile(contactsPath).then((response) =>{
        const contacts = JSON.parse(response);
        const newContacts = contacts.filter((elem)=>elem.id !== contactId);

        fs.writeFile(contactsPath, JSON.stringify(newContacts));
  })}
  
  function addContact(name, email, phone) {
    fs.readFile(contactsPath).then((response) =>{
        const contacts = JSON.parse(response);
        contacts.push({
            name,
            phone,
            email,
            id: contacts.length + 2,
        })
        fs.writeFile(contactsPath, JSON.stringify(contacts));
    })  
    return;
  }
  
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}