import React from "react";
import { Button } from "react-bootstrap";
import { marked } from "marked";

marked.setOptions({
    gfm:true,
    breaks: true,
    headerIds: false,
    mangle: false,
});

const ExportButton =  ({exportFile}) =>{

    const handleExport = () =>{
        const htmlContent = marked(exportFile);
        const blob = new Blob([htmlContent], {type:'text/html'});

        const link= document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'markdown.html';

        link.click();
        URL.revokeObjectURL(url);
    }

    return(
        <Button variant="dark" onClick={handleExport}>Export</Button>
    );
}

export default ExportButton