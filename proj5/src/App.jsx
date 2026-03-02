import Nav from "./Components/Nav"
import {FiSearch} from "react-icons/fi"
import {CiCirclePlus} from "react-icons/ci"
import { useEffect, useState } from "react"
import { collection,  getDocs, onSnapshot } from "firebase/firestore"
import {db} from "./config/firebase.js"
import Contactlist from "./Components/Contactslist.jsx"
import AddorDelete from "./Components/AddorDelete.jsx"
import useDisclouse from "./Hooks/useDisclouse.js"
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"



const App = () => {

const [contacts,setcontacts]=useState([]);
const [loading,setloading] = useState(true);

const {onClose,onOpen,isopen}=useDisclouse();

  useEffect(()=>{
    const getcontact = async () =>{

     try {
       const Collections = collection(db,"contact");

     onSnapshot(Collections,(snapshot)=>{
          const contactlist = snapshot.docs.map((doc)=>
       { return {
            id:doc.id,
            ...doc.data()
      }
      });
       setcontacts(contactlist);
       setloading(false);
        return contactlist;
     });


       
     } catch (error) {
      console.log(error);
     }
    }
    getcontact();
    
  },[])

  const filterContacts=(e)=>{
    const filteredvalue = e.target.value;
      const Collections = collection(db,"contact");

     onSnapshot(Collections,(snapshot)=>{
          const contactlist = snapshot.docs.map((doc)=>
       { return {
            id:doc.id,
            ...doc.data()
      }
      });

      const filteredCon= contactlist.filter(contact=>contact.name.toLowerCase().includes(filteredvalue.toLowerCase()))


       setcontacts(filteredCon);
       setloading(false);
        return filteredCon;
     });

  }


  return (
    <>

    <div className="mx-auto max-w-92.5">
      <Nav/>
      <div className="flex ">
        <div className="flex relative grow ">
        <FiSearch className=" absolute left-5 top-5 text-white text-3xl ml-1"/>
        <input onChange={filterContacts} type="text" className="grow m-4 bg-transparent border border-white rounded-md h-10 text-white pl-11 font-bold" />
      </div>
      <div className="mt-4.5 -ml-2 mr-3">
        <CiCirclePlus onClick={onOpen} className=" text-white text-4xl cursor-pointer"/>
      </div>
      </div>
      {
         loading ? (
      <div className="flex justify-center items-center h-40">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
          ) : (
     <Contactlist contacts={contacts}/>
            )
      }
       
    </div>
       <AddorDelete isopen={isopen} onClose={onClose}/>
       <ToastContainer position="bottom-center"/>
        </>
  )
  
}

export default App
