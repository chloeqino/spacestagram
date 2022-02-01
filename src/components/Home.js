import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import NasaPhoto from "./NasaPhoto";
import StackGrid from "react-stack-grid";
import { Button } from './Styles';
import NanBar from "./NavBar";
import DatePicker from 'react-date-picker';
const today = new Date();
function travelBack(days, start_date=today){
    let pastdate = new Date(start_date);
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
    const [visible, setVisible] = useState(false);
    const [startDate,setStartDate] = useState(new Date());
    let thegallery = gallery;
   //console.log(gallery);
  
   useEffect(() => {
     //console.log('update');
   thegallery = gallery;
   setGallery(gallery);
  //console.log(gallery);
}, [gallery])
  
   function updateGallery(value){
     console.log(value);
     let newgallery = gallery;
     
    while(gallery.length){
      gallery.pop();
    }
    newgallery = [];
     for(let i=0; i<6;i++){
       newgallery.push(<NasaPhoto key = {`photo${dateFormatter(travelBack(i,value))}`} photodate={dateFormatter(travelBack(i,value))} />)
     }

  console.log('g'+newgallery);
  setGallery([...newgallery]);
      //setStart(start-2);
  setStart(6);
 
   }
    
    function getGallerys(){
       
       let n = start;
       let newgallery = gallery;
        while (n<=num+start&&travelBack(n,startDate)>=new Date(1995,5,16)){
          
            newgallery.push(<NasaPhoto photodate={dateFormatter(travelBack(n,startDate))} />)
            n++;
        }
       setGallery(newgallery);
    }
    function LoadMore(){
      console.log('s'+travelBack(start+6,startDate));
      //if(travelBack(num,startDate)<=new Date(1995,5,21)){return}
        setStart(start+num+1);
        getGallerys();
    }
    
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
          
             <div className="wrapper" id="startdatePicker">
           
            Start Date: &nbsp;
     <DatePicker value={startDate} onChange={(value)=>{
       setStartDate(value);
       setGallery([]);
       setStart(6);
       updateGallery(value);
     }} format='y-MM-dd' maxDate={new Date()} clearIcon={null} minDate={new Date(1995,5,21)} />
             </div>
             
            <div className="wrapper" id="attribution">bought to you by <abbr title="National Aeronautics and Space Administration">NASA</abbr>'s <abbr title="Astronomy Picture of the Day">APOD</abbr> API</div>
            <div id="gallery" className="wrapper">
                     {gallery}
                
            </div>
            <button onClick={()=>LoadMore()} id="loadmore" disabled={(travelBack(start-6,startDate))<=new Date(1995,5,21)?true:false}>More</button>
            {(travelBack(start-6,startDate))<=new Date(1995,5,21)?
            <footer className="wrapper">
            you have reached the end
            </footer>:''}
            </div>
       
    );
}