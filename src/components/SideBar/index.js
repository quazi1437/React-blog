import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

const SideBar = props => {
    
    
    const[posts,setPosts]=useState([]);    

    useEffect(() =>{
        const posts=blogPost.data;
        setPosts(posts);

    },[posts]);


    return (

        <div className="sidebar-container">
            <Card style={{marginBottom:"20px"}}>
                <div className="card-header">
                    <span>About us</span>
                </div>

                <div className="profile-image">
                    <img src={require("../../Blog-post-images/jonny.jpg")} alt="johnny depp"/>
                    <div className="card-body">
                        <p>My name is johnny depp and i'm the best actor alive</p>
                    </div>
                </div>

                
            </Card>

            <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
                <div className="card-header">
                    <span>Social network</span>
                </div>
            </Card>

            <Card style={{marginBottom:"20px",padding:"20px",boxSizing:"border-box"}}>
                <div className="card-header">
                    <span>recent posts</span>
                </div>
                <div className="recent-posts">

                    {
                        posts.map(post =>{
                        
                            return(
                                <NavLink key={post.id} to={`/post/${post.id}`}>
                                    <div className="recent-post">
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                                );
                        })
                    }
                    
                </div>

            </Card>

        </div>
            
        
    );
}
export default SideBar;