import { useEffect, useState } from "react";

function useDebounce(value,delay) {
   const [debounceValue,setDebounceValue] = useState(value);
   useEffect(()=>{
    const handleValue = setTimeout(()=>{
        setDebounceValue(value)
     },delay)
     return () =>clearTimeout(handleValue);
   },[value])
   
    return debounceValue
    
    
}

export default useDebounce;