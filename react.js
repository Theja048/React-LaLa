import React from "react";
import  ReactDOM  from "react-dom/client";
 
        const parent = React.createElement("div",{id:"parent"},
        [
        React.createElement("div",{id:"child"},
        [
        React.createElement("h1",{},"this is h1"),
        React.createElement("h2",{},"this is La La React ")],

        React.createElement("div",{id:"child"},
        [
        React.createElement("h3",{},"this is h1"),
        React.createElement("h4",{},"this is h2")]
        ))
        ])


        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent)

