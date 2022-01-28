import React,{ useState }from "react";

export default function ReadMore(props){
   const [more,setMore] = useState(false);
   function toggleLess(){
       setMore(false);
   }
   function toggleMore(){
       setMore(true);
   }
   return (<p className={props.className}>
        {props.content.slice(0,props.num)}{(props.content.length>props.num && !more)?`...`:""}
        {more?'':<button onClick={toggleMore} className="underline">read more</button>}
        {more?props.content.slice(props.num):""}
        {more?<button onClick={toggleLess} className="underline">read less</button>:""}
    </p>);
}