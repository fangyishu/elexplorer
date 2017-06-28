import React from "react";

export default FileList = (props) => {
    return (
        <div>
            {props.files.join(", ")}
        </div>
    );
};