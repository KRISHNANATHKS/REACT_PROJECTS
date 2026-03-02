import { deleteDoc, doc } from "firebase/firestore"
import {HiOutlineUserCircle} from "react-icons/hi"
import {IoMdTrash} from "react-icons/io"
import {RiEditCircleLine} from "react-icons/ri"
import { db } from "../config/firebase"
import useDisclouse from "../Hooks/useDisclouse"
import AddorDelete from "./AddorDelete"
import { useState } from "react"
import { toast } from "react-toastify"

const Contactslist = ({contacts}) => {
  const[selectedcont,setselectcont]= useState(null);

  const {onClose,onOpen,isopen}=useDisclouse();


    const Deletecontact= async(id)=>{
        try {
           await deleteDoc(doc(db,"contact",id));
            toast.success("Contact Deleted Successfully");
        } catch (error) {
          console.log(error);
        }
  }

  return (
    
      <div>
        {
          contacts.map((contact)=>
        
          <div key={contact.id} className="bg-yellow-200 flex justify-between rounded-xl m-4 border-2 border-white">
             <div className="flex gap-5 items-center">
               <HiOutlineUserCircle className="text-4xl text-orange-400 ml-1"/>
              <div className="">
                <h2 className="font-bold">{contact.name}</h2>
                <p className="font-semibold">{contact.email}</p>
              </div>
             </div>
              <div className="flex  items-center gap-2.5">
                 <RiEditCircleLine onClick={()=>{setselectcont(contact);onOpen();}} className="text-4xl cursor-pointer "/>
                <IoMdTrash onClick={()=>Deletecontact(contact.id)} className=" text-4xl text-orange-400 mr-1.5 cursor-pointer"/>
              </div>
          </div>
          
          )
         
        }
        <div>
          <AddorDelete selectedcont={selectedcont} isUpdate={true} isopen={isopen} onClose={onClose}/>
        </div>
      </div>
    
  )
}

export default Contactslist
