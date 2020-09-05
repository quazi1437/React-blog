import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json"

const BlogPost = props => {

    const [post,setPost]=useState({
            id:"",
            blogCategory:"",
            blogTitle:"",
            postedOn: "",
            author: "",
            blogImage: "",
            blogText: ""
    });
    const [postId,setPostId]=useState("");    

    useEffect(() =>{
        const postId = props.match.params.postid;
        const post=blogPost.data.find(post => post.id==postId);
        setPost(post);
        setPostId(postId);
    },[post,props.match.params.postid]);

    if(post.blogImage=="")return null;

    return (
        <div className="blog-post-container">
        
            <Card>
                <div className="blog-header">
                    <span className="blog-category">{post.blogCategory}</span>
                    <h1>{post.blogTitle}</h1>
                    <span className="posted-by">posted on {post.postedOn} by {post.author}</span>
                </div>

                <div className="post-image-container">
                    <img src={require(`../../Blog-post-images/`+ post.blogImage )} alt="image1"/>
                </div>

                <div className="post-content">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>

                </div>
                
            </Card>

        </div>
    );

}
export default BlogPost;