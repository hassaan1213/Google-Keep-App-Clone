import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: "",
    })
    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const { name, value } = event.target;
        setNote((preData) => {
            return {
                ...preData,
                [name]: value,
            };
        });
    };
    const addEvent = () => {
        props.passNote(note);
    }
    const expandIt = () => {
        setExpand(true);
    }

    const backTo = () => {
        setExpand(false);
    }
    return (
        <div className='main_note' onDoubleClick={backTo}>
            <form>
                {expand ? (
                    <input
                        type="text"
                        name="title"
                        autoComplete="off"
                        placeholder="Title"
                        value={note.title}
                        onChange={InputEvent}
                    />) : null}
                <textarea
                    rows=""
                    column=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    onClick={expandIt}
                    placeholder="Write a note..."
                ></textarea>
                {expand ? (
                    <Button onClick={addEvent}>
                        <AddIcon className="plus-sign" />
                    </Button>) : null}
            </form>
        </div>
    )
}
export default CreateNote;