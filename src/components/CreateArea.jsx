import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {

    const [rendering, setRendering] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function show() {
        setRendering(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
              ...prevNote,
              [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {
                    rendering &&
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                        onClick={show}
                    />
                }
                
                <textarea
                    name="content"
                    onClick={show}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={rendering ? 3 : 1}
                />
                <Zoom in={rendering}>
                    <Fab>
                        <AddIcon onClick={submitNote} aria-label="add"/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
