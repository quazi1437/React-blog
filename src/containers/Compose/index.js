import React from "react";
import "./styles.css";
import Card from "../../components/UI/Card";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Compose = props =>{

        return (
        <div className="compose-form">
            <Card />
            
            <TextField id="outlined-basic" label="Title" variant="outlined" />
            <textarea className="textarea-bar" id="w3review" name="w3review" placeholder="compose your blog" rows="20" cols="150"></textarea>
            <input className="file-handler"  type="file" />
            <div>
            <Button variant="contained" color="primary" disableElevation>Post Blog</Button>
            </div>
            
        </div>
    )

}
export default Compose;