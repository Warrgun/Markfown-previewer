import React from "react";
import Marked from "marked-react";

const Markdown = ({markdown}) =>{
    return(
        <div id="preview">
            <Marked 
                options={{
                    gfm:true,
                    breaks: true,
                    headerIds: false,
                    mangle: false,
                }}
            >
                {markdown}
            </Marked>
        </div>
    );
}

export default Markdown;