import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";


function ContactList(props) {
const {contact,removeContact}= props

console.log("hi from ContactList",contact)

// console.table(contact.email)````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// useEffect(() => {
// setfirst([...first,contact])
// }, [])

// ya ye kaam neeche krlo return k baad ya yha 13 -19 m jo kiya h
// const list=contact.map((i)=>{
//     return (
//         <div>
//             <div>{i.name}</div>
//             <div>{i.email}
//                 </div>
//         </div>
//     )


// })

  return (
    <>
    {/* <div>Contact List
        {list}
         </div> */}

         {
         contact.map(
            (i)=>{ 
                return <div className="flex border-r-8">
                <div className='bg-orange-500 mx-1 '>{i.data.name}</div>
                <div className='bg-green-500 '>{i.data.email}</div>
                {/* <div className='bg-yellow-400 '>{i.id} */}
               <span onClick={()=>removeContact(i.id)}> <MdDeleteForever className='text-center my-3'></MdDeleteForever></span></div>
       
        //  </div>
        }
         )
         }
         {/* <div className="flex justify-center">
            <div className="bg-red-800-red-100 w-5">h</div>
            <div className="bg-green-600 w-5">g</div>
         </div> */}
         </>
  )
}

export default ContactList