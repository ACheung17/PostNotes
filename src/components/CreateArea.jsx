import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  //state for expanded and collapsing note's content area.
  const [isExpanded, setExpanded] = useState(false);

  //state of createArea 
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //gets name of the input field thats getting data
  function handleChange(event) {
    const { name, value } = event.target;

    //each input updates its own state, so "append" to the prev (half) note. (Spread operator) 
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    //add note to array
    props.onAdd(note);
    //reset the input fields
    setNote({
      title: "",
      content: ""
    });
    //prevent refreshing 
    event.preventDefault();
  }

  //when input fields are clicked
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* when clicked, display title and content fields */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // expand content field
          rows={isExpanded ? 3 : 1}
        />
        {/* the add button floats in (or zooms in) when expanded*/}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
