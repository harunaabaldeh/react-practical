// import logo from './logo.svg';
// import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
    <Info />
    <AddItem />
    <AvailablePeople />
    </div>
  );
}

function Info(){
  const title = 'This is my title';

  return(
    <div>
      {title}
      <h1>Inventory Management </h1>
      <p>Manage your stuffs</p>
      <Info />
    </div>
  );
}

function AddItem(){
  return(
    <form>
      <label for='text-form'>Type something</label>
      <input type="text" id="text-form" />
    </form>
  );
}

function AvailablePeople(){
  return(
    <div>
     <h1>This is the place to find all the doctors and their special characters</h1>
    </div>
  );
}

export default App;
