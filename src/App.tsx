import React from 'react';
import logo from './logo.svg';
import './App.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from './lib/firebase';

function App() {

  const addSample = async() => {
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});
    console.log("Document written with ID: ", docRef.id);
    }
  return (
    <div className="App">
      <button onClick={addSample}>Add Sample</button>
    </div>
  );
}

export default App;
