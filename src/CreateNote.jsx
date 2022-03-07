import React,{useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote =(props)=>{

    const [expend, setExpend] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content:"",
    });

    const InputEvent = (event)=> {

        // const value = event.target.value;
        // const name = event.target.name;

        const {name,value} = event.target
        setNote((prevData) => {
            return {
                ...prevData,
                [name]:value,
            };
        });
        // console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    };

        const expendIt= () =>{
            setExpend(true);
        }; 

        const btoNormal= () =>{
            setExpend(false);
        }; 

    


    return(
        <>
            <div className="main_note" onDoubleClick={btoNormal}>
                <form>
                    {expend ?
                    <input type="text"
                     value={note.title} 
                     name="title"
                     onChange={InputEvent} 
                     placeholder="Title" 
                     autoComplete="off" >
                     </input> : null }
                    <textarea 
                    rows="" 
                    column=""
                    value={note.content} 
                    name="content"
                    onChange={InputEvent} 
                    placeholder="Write a note..."
                    onClick= {expendIt}
                     >
                    </textarea>
                    {expend ?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button> : null }
                </form>
            </div>
        </>
    );
};

export default CreateNote;
