import React from "react";
import "./styles.css"
import Header from "../../components/Header";
import Card from "../../components/UI/Card";
import SideBar from "../../components/SideBar";
import Recentposts from "./Recentposts";
import blogData from "../../data/blog.json";

const Home = props => {

    const gallaryHeight=450;
    const gallaryStyle={
        height : gallaryHeight+"px",
        overflow:"hidden"
    }

const Sideimage = props =>{
   return( 
        <div style={{height:`${props.height}px`}}>
        <img src={props.src}/>
        </div>
   )

}

const ImageGallery= props => {
    return(
        <div className="galary-posts" style={props.gallaryStyle}>
                <section style={{width:"70%"}}>
                    <div className="main-image-wrapper">
                        <img src={require(`../../Blog-post-images/${props.imagesArray[4]}`)}/>
                    </div>

                </section>
                <section className="side-image-wrapper" style={{width:"30%"}}>
                    
                    <Sideimage height={props.sidePostHeight} src={require(`../../Blog-post-images/${props.imagesArray[1]}`)}/>
                    <Sideimage height={props.sidePostHeight} src={require(`../../Blog-post-images/${props.imagesArray[2]}`)}/>
                    <Sideimage height={props.sidePostHeight} src={require(`../../Blog-post-images/${props.imagesArray[3]}`)}/>
                    
               </section>

            </div>
            
        
    )
}
    const sidePostHeight = gallaryHeight/3;  
    const imgAr=blogData.data.map(post => post.blogImage)  
    return (
        <div>
            <Card>

            <ImageGallery 
                largewidth="70%"
                smallwidth="30"
                sidePostHeight={sidePostHeight}
                gallaryStyle={gallaryStyle}
                imagesArray={imgAr}
            />
            </Card>
            <section className="home-container">
                <Recentposts style={{width:"70%"}}/>
                <SideBar />
                
                

            </section>

            
        </div>
    );
}
export default Home; 