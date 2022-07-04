import React, { useEffect, useState } from "react";

import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import "./App.css";

function App() {
  const [mode,setMode] = useState("dark");
  const [text_lightdark,setText_LightDark] = useState("text-light");
  // let [text_color,setTextColor] = useState("black");
  let [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({ 
      msg:message,type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  let [text_badal,setTextBadal]=useState("Dark Mode");
 
  let toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("dark mode has been enabled","success");
      setInterval(()=>{document.title="NotesApp-Dark Mode"},2000);  
      // setTextColor("white")
      document.body.style.color="white";
    }else{
      setMode("light");
      // setTextColor("black")
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("light mode has been enabled","success");
      setInterval(()=>{document.title="NotesApp-Dark Mode"},2000);
    }
    if(text_lightdark==="text-light"){
      setText_LightDark("text-dark");
    }else{
      setText_LightDark("text-light");
    }
    if(text_badal==="Dark Mode"){
      setTextBadal("Light Mode");
    }else{
      setTextBadal("Dark Mode");
    }
  }
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Navbar title="TextUtils" about='about' 
   toggle={toggleMode} mode_={mode} text_change={text_lightdark} text_badal_={text_badal}/>
   <Alert alert={alert}/>
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
