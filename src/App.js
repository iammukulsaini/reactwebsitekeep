import React, { useState } from "react";
import './index.css';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { valueToPercent } from "@mui/base";

const App = () => {
  const [addItem, setAddItm] = useState([]);
  
  const addNote = (note) => {
    // alert ("why'd you clicked me")
    setAddItm((prevData) => {
      return (
          [...prevData,note ]
      );
    });
    console.log('note');
  };

    const onDelete = (id) =>{
        setAddItm((olddata) => 
        olddata.filter((cuudata, indx) =>{
            return indx !== id;
        })
        );
    };

    return (
      <>
        <Header/>
        
        <CreateNote
        passNote= {addNote}
        />
        {addItem.map((val,index) =>{
          return <Note
            key ={index}
            id = {index}
            title = {val.title}
            content = {val.content}
            deleteItem = {onDelete}
          />
        })
        } 
        <Footer/>
      </>
    );
};

export default App;
