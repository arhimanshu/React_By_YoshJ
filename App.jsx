import React, { useState } from 'react'
import Header from './Components/Header'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import uuid4 from "uuid4";
function Index() {
  const [contact, setcontact] = useState([]);
  const localStorageKey="contact"

useEffect(() => {
  localStorage.setItem(localStorageKey,JSON.stringify(contact))
  
}, [contact])



// ye function as a prop pass krenege to addcontact component and vha se data aaeha back into this or usko pass
// kr denge 
  const ShowData=(data)=>{
    console.log("data from index.js",data)
    setcontact([...contact,{id:uuid4(),data}])
    console.log("uuid ka baad" ,contact)
  }
const removeContact =(id)=>{
console.log("id is",id)
const updatedList=contact.filter((x)=>{return x.id !== id})
setcontact(updatedList)
}
// const addcontact=(data)=>{
//   setcontact(data)
// }

  return (
    <>
    <Header></Header>
    <AddContact ShowData={ShowData}></AddContact>
    <ContactList contact={contact} removeContact={removeContact}></ContactList>
    </>
  )
}
export default Index
