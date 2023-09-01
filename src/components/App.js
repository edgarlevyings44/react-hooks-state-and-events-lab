import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDarkMode] = useState(false); // State variable for dark mode

  function toggleDarkMode() {
    setDarkMode(!darkMode); // Toggle the state of the dark mode
  }
  const appClass = darkMode ? "App dark" : "App light" //Determination of the color of the mode

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {darkMode ? (
          <button onClick={toggleDarkMode}>Light Mode</button>
        ) : (
          <button onClick={toggleDarkMode}>Dark Mode</button>
        )}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
