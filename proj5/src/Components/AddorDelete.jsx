import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import Modal from "./Modal"
import {ErrorMessage, Field, Form, Formik} from "formik"
import { toast } from "react-toastify"
import * as Yup from "yup"

const validation=Yup.object().shape(
  {
    name:Yup.string().required("Name is Required"),
    email:Yup.string().email("Invalid Email").required("Email is Required"),
  }
)


const AddorDelete = ({isopen,onClose,isUpdate,selectedcont}) => {


  const Addcontact =async (contact)=>{
      try {
        const ContactRef= collection(db,"contact");
          await addDoc(ContactRef,contact);
          toast.success("Contact Added Successfully")
      } catch (error) {
        console.log(error);
      }
    }

        const Updatecontact =async (contact,id)=>{
      try {
        const ContactRef= doc(db,"contact",id);
          await updateDoc(ContactRef,contact);
          toast.success("Contact Updated Successfully")
      } catch (error) {
        console.log(error);
      }
}



  return (
    <div>
        <Modal isopen={isopen} onClose={onClose}> 
          <Formik
           validationSchema={validation}

            initialValues={ isUpdate ?  {
                name:selectedcont?.name,
                email:selectedcont?.email
              } :
              {
                name:"",
                email:""
              }
            }
            onSubmit={(values)=>{
              console.log(values);
              isUpdate ? Updatecontact(values,selectedcont.id):
              Addcontact(values);
              onClose();
            }}
          >
                <Form>
                   <div className="-mt-2">
                     <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-bold">Name</label>
                        <Field  name="name"  className="border-2 h-10 p-2"/>
                        <div className="text-xs text-red-500">
                          <ErrorMessage name="name"/>
                        </div>
                    </div>
                     <div className="flex flex-col gap-1 my-1">
                        <label htmlFor="email" className="font-bold">Email</label>
                        <Field  name="email"  className="border-2 h-10 p-2"/>
                        <div className="text-xs text-red-500">
                          <ErrorMessage name="email"/>
                        </div>
                    </div>
                    <div className="flex py-5">
                         <button className=" grow h-10 border-4 rounded-md border-amber-50 bg-black text-white hover:bg-white  hover:border-black hover:text-black transition duration-700 ease-in-out">{isUpdate?"Update":"Add"} Contact</button>
                    </div>
                   </div>
                </Form>
          </Formik>
        </Modal>
    </div>
  )
}

export default AddorDelete
