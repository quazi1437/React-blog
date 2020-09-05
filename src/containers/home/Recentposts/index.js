import React from "react";
import "./styles.css";
import Card from "../../../components/UI/Card";

const Recentposts=props =>{
    return(
        
        <div style={{width:"70%"}} {...props}>
                <Card style={{marginBottom:"20px"}}>
                    <div className="post-image-wrapper">
                        <img src={require("../../../Blog-post-images/image5.jpg")}/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <span>featured</span>
                        <h2>fitness mantra to life</h2>
                        <span>posted on date by author name</span>
                        <p>this is the first post and the example text which ill be changed once the dynamics have been applied</p>
                        <button>read more</button>
                    </div>
                    
                </Card>

                
            </div>
            
    )
}
export default Recentposts;