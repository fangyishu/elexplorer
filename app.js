import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World! from Yishu Fang.</div>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("app"));
