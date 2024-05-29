import React, { useState } from 'react'
function AddContact(props) {
    const [contactData, setcontactData] = useState({name:"",email:""})
    //onchange
    const HandleChange=(e)=>{
        e.target.name === "name" ? setcontactData({...contactData,name:e.target.value}) : setcontactData({...contactData,email:e.target.value}) 
console.log("handlechange",contactData)
    }
    const HandleClick=()=>{
        if(contactData.name==="" && contactData.email==="" ) alert("bhar bsdk")

        console.log(contactData)
    props.ShowData(contactData)
setcontactData({name:"",email:""})
}
  return (
    <div className='text-left mx-5'>
        <div> AddContact </div>
        <form>
            <label className='mx-2 break-words'>Name:</label><input type="text" className="border-black " placeholder="Enter Name" name="name" value={contactData.name} onChange={HandleChange}/>
            <label className='mx-2'>Email:</label><input type="email" className="border-red-600" placeholder="Enter Email" name="email" value={contactData.email} onChange={HandleChange}/>
        </form>
        <button className='bg-red-950 px-2 text-gray-100 border-spacing-2' onClick={HandleClick}>ADD</button>

       </div>
  )
}

export default AddContact