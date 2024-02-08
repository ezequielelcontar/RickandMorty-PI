import React from "react";
import styles from './SearchBar.module.css'; // Ajusta la ruta de importación según sea necesario

export default function SearchBar(props) {
   const [id, setId] = React.useState("");
   const handleChange = event => {
      const {value} = event.target;
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   const handleRandom = () => {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      props.onSearch(randomNumber);
   };
   
   return (
      <div className={styles.searchBarContainer}>
         <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
            className={styles.searchInput}
         />
         <button onClick={handleClick} className={styles.searchButton}>Agregar</button>
         <button onClick={handleRandom} className={styles.randomButton}>Random</button>
         <hr />
      </div>
   );
}
