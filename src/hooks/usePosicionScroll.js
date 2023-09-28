"use client"
import React, { useEffect , useState} from 'react'

export const usePosicionScroll = () => {
  
    const [PosicionScroll, setPosicionScroll] = useState(0);

    useEffect(()=> {
        const updatePosicionScroll = () => {
            setPosicionScroll(window.pageYOffset);
        };
        window.addEventListener("scroll", updatePosicionScroll);
        updatePosicionScroll();
        return() => window.removeEventListener("scroll", updatePosicionScroll);

    },[]);

    return PosicionScroll;
}