import { useState } from "react";

const useDisclouse = () => {

    const [isopen,setopen] = useState(false);
    
    const onOpen=()=>{
      setopen(true);
    }
    const onClose=()=>{
      setopen(false);
    }
    
  return (
    {onClose,onOpen,isopen}
  )
}

export default useDisclouse
