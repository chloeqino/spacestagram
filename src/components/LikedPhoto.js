import React from "react";
import ServiceWorker from "../serviceWorker";
import NanBar from "./NavBar";
import NasaPhoto from "./NasaPhoto";
import { Link } from "react-router-dom";

class LikedPhoto extends React.Component{
    gallery = [];
    constructor(props){
        super(props);
        this.gallery = new ServiceWorker().LikedPhoto.map((e)=>{
            return <NasaPhoto photodate={e} />;
        })
    }
    render(){
        return (<div className="container">
            
            <div className="wrapper">
                <div id="totallikes"><strong>{this.gallery.length}</strong> Likes</div>
            <div id="gallery">
                 {this.gallery}
            
            </div>
            <div id="explore">
                {(this.gallery.length==0)?(<p>You haven't liked any photo yet<br />
                Go back to the <Link to="/spacestagram/">home page</Link> to explore the space!
                </p>):
    (<p>You have reached the end :)<br />
                Go back to the <Link to="/spacestagram/">home page</Link> to find out more amazing photos of the space!</p>)}
            </div>
            </div>
        </div>);
    }
}

export default LikedPhoto;