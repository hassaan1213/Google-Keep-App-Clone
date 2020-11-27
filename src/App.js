import React, { useState } from 'react';
// import './App.css';
import './index.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote'
import Note from './Components/Note'

const App = () => {
  const [addItem, setAddItem] = useState([])

  const addNote = (note) => {

    setAddItem((preData) => {
      return [...preData, note]
    });

  };
  const onDelete = (id) => {
    setAddItem((olddata) =>
    olddata.filter((currdata, indx)=>{
      return indx !==id;
    })
  )
}

  return (
    <div>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
