import React, { useState, useEffect } from "react";

export const App = () => {
  const [pokemons, setPokemons]= useState([]);

  useEffect(async () => {
    const response =await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
  setPokemons(data.results);
});

return (
  <ul>
    {pokemons.map(({ name, url}) => (
     <li key={url}>{name}</li> 
))}  
  </ul>
);
    };

function App() {
  const [people, setPeople] = useState([]);

   const clickRef = useRef(0);

  const inputRef = useRef();

  useEffect(() => {
    if (people.length > 0) {
      setCounter((current) => current + 1);
    }
  }, [people]);

  useEffect(() => {
    console.log("I render");
  });

  function handleClick() {
    clickRef.current++;
    console.log(`Clicked ${clickRef.current} times`);
  }

  function handleCheckReference() {
    console.log(inputRef.current.id);
  }

  return (
    <div className="App">
      {/* <button className="click-button" onClick={handleClick}>
        Click me
      </button> */}
      <button className="click-button" onClick={handleCheckReference}>
        Check reference
      </button>
      <input type="text" placeholder="name" name="nameInput" />
      <h1>Users: {counter}</h1>
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        name="lastName"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      <button
        id="boton"
        className="test"
        ref={inputRef}
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}
      >
        Add user
      </button>
      <ul>
        {people.map((person, idx) => (
          <li key={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;