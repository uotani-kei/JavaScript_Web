import { useState } from 'react';
// Babel Script 
  function Header(props) {
    return <h1>{props.title}</h1>;
  }
  /*  function Header({title}) {
    return <h1>{title}</h1>; */
  export default function HomePage() {
    const [likes, setLikes] = useState(0);
    const [pom, setPom] = useState("pom");
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    function handleClick() {
      console.log('increment like count');
      setLikes(likes + 2);
      setPom(pom + 1)
    }

    return (
      <div>
        {/* Nesting the Header component */}
        <Header title="123456789" />
        <ul>
          {names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
        <button onClick={handleClick}>Like({likes})</button>
        <button onClick={handleClick}>pom({pom})</button>
      </div>
    );
  }