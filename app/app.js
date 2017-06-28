import React from "react";
import ReactDOM from "react-dom";

import FileList from "./FileList";
import DirectoryReader from "./DirectoryReader";

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };

        DirectoryReader.readDirectory().then((files) => {
            this.setState(() => ({
                files: files
            }));
        });
    }

    render() {
        return (
            <div>
                Files in /: <FileList files={this.state.files} />
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("app"));
