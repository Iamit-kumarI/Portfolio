import React from "react";
import { useEffect,useState } from "react";
import "./intro.css"

function Intro(){
    const names=[" AMIT KUMAR", " .../amitK300"," .../aAmit"," .../AmitP9t"];
    const[text,setText]=useState("");
    const[nameIndex,setNameIndex]=useState(0);
    const[charIndex,setCharIndex]=useState(0);
    const[isDeleting,setIsDeleting]=useState(false);
    useEffect(()=>{
        const currentName=names[nameIndex];
        let timeout;
        if(!isDeleting){
            timeout=setTimeout(()=>{
                setText(currentName.slice(0,charIndex+1));
                setCharIndex(charIndex+1);
                if(charIndex+1==currentName.length){
                    setTimeout(()=>setIsDeleting(true),500);
                }
            },100);
        }else{
            timeout=setTimeout(()=>{
                setText(currentName.slice(0,charIndex-1));
                setCharIndex(charIndex-1);
                if(charIndex==0){
                    setIsDeleting(false);
                    setNameIndex((nameIndex+1)%names.length);
                }
            },20);
        }
        return ()=>clearTimeout(timeout);
    },[charIndex,isDeleting,nameIndex]);
    return (
      <>
        <div>
          <div className="text">
            <h2>👋🏼 Hi I'm</h2>
            <h2 className="typerWritter">{text}</h2>
          </div>
          <p>
            A passionate Software Developer 🔥 having an experience of building
            Web applications with Spring / Reactjs / Java / MongoDB and some
            other cool libraries and frameworks
          </p>
          <div className="image">
            <img src="" alt="" />
          </div>
        </div>
      </>
    );
}
export default Intro;