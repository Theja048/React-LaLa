import React from "react";
import  ReactDOM  from "react-dom/client";
 
        // const parent = React.createElement("div",{id:"parent"},
        // [
        // React.createElement("div",{id:"child"},
        // [
        // React.createElement("h1",{},"this is h1"),
        // React.createElement("h2",{},"this is La La React ")],

        // React.createElement("div",{id:"child"},
        // [
        // React.createElement("h3",{},"this is h1"),
        // React.createElement("h4",{},"this is h2")]
        // ))
        // ])


        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(parent)

//we are using jsx to creact reactElements 
const JsxElement = () => (
        <h1>LA LA React🚀</h1>
)
 //const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(jsxElement)

//component composistion
const Title = () => (
        <><JsxElement /><h1 className="title">React inside heading</h1></>
) 
 const Heading = () =>(
        <div id="container">
 
 <Title/>
 <Title/>
 <Title/>
         <h2>Hello world using function base</h2>
        </div>
       
       
 )
 const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Heading/>)