import {AiOutlineCloseCircle} from "react-icons/ai"
import {createPortal} from "react-dom"


const Modal = ({isopen,onClose,children}) => {
  return createPortal(
    <>
    {isopen && (
        <>
        <div className=" m-auto z-50 relative min-h-70 max-w-90 bg-amber-200 p-7 rounded-2xl "> 
        <div className="flex justify-end ">
            <AiOutlineCloseCircle onClick={onClose} className="text-2xl font-bold cursor-pointer m-1"/>
        </div>

         {children}
         
        </div>
        <div onClick={onClose} className="z-40 top-0 fixed h-screen backdrop-blur-lg w-screen" />
        </>
               )
        
        }

    </>,document.getElementById("modal-root")
  )
}

export default Modal
