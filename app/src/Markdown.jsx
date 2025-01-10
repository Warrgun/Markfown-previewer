import React from "react";
import Marked from "marked-react";

const Markdown = ({markdown}) =>{
    return(
        <div className=" bg-light mt-auto overflow-auto h-100 px-2 rounded-2 scrollbar">
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
        </div>

    );
}

export default Markdown;