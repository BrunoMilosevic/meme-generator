import React from "react";

function Generator(props){
    return(
        
            <div className="generator">
                <form className="grid-form">
                    <input className="input-text" type="text" name="top-text"  id="top-text" placeholder="Top text"></input>
                    <input className="input-text" type="text" name="bottom-text" id="bottom-text" placeholder="Bottom text"></input>
                    
                    <input type="submit" className="submit-btn" value="Get a new meme image 🖼" />
                
                </form>

                <div className="generated-image">
                    <img src={props.img} alt="Generated Meme"/>
                </div>
            </div>
       
    )
}

export default Generator