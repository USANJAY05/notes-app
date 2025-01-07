import { useEffect, useState } from "react";

const useMobileSize=()=>{

    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 800);
      };
    
    useEffect(()=>{
        // console.log("hello world"+isMobile)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    },[])

    return isMobile
    
}

export default useMobileSize;