import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import NasaPhoto from "./NasaPhoto";
import StackGrid from "react-stack-grid";
import { Button } from './Styles';
import NanBar from "./NavBar";
const today = new Date();
function travelBack(days){
    let pastdate = new Date(today);
    pastdate.setDate(pastdate.getDate()-days);
    return pastdate;
}
function dateFormatter(dateObject){
  let datestring = dateObject.getDate();
  let yearstring = dateObject.getFullYear();
  let monthstring = dateObject.getMonth()+1;
  return yearstring+"-"+monthstring+"-"+datestring;
}

let initalgallery = [...Array(6).keys()].map((e,i)=>{
    return <NasaPhoto key ={`photo${i}`} photodate={dateFormatter(travelBack(e))} />;
});

console.log(initalgallery);
export default function Home(){
    const [num,setNum] = useState(5);
    const [start,setStart] = useState(6);
    const [gallery,setGallery] = useState([...initalgallery]);
    const [visible, setVisible] = useState(false)
   console.log(gallery);
  
   const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
    
    function getGallerys(){
       
       let n = start;
       let newgallery = gallery;
        while (n<=num+start){
            newgallery.push(<NasaPhoto photodate={dateFormatter(travelBack(n))} />)
            n++;
        }
       setGallery(newgallery);
    }
    function LoadMore(){
        setStart(start+num+1);
        getGallerys();
    }
    useEffect(() => {
        // Update the document title using the browser API
      // LoadMore();
      });
      /* <div id="gallery" className="wrapper desktop">
                 <div className="col">
                     {gallery.filter((e,i)=>{return i%2==0})}
                 </div>
                 <div className="col">
                 {gallery.filter((e,i)=>{return i%2!=0})}
                 </div>
            
            </div> */
            // <div id="gallery" className="wrapper">
    return (
       
           
            
          <div className="home">

            <div className="wrapper" id="attribution">bought to you by <abbr title="National Aeronautics and Space Administration">NASA</abbr>'s <abbr title="Astronomy Picture of the Day">APOD</abbr> API</div>
            <div id="gallery" className="wrapper">
                     {gallery}
                
            </div>
            
            <button onClick={()=>LoadMore()} id="loadmore">More</button>
            </div>
       
    );
}