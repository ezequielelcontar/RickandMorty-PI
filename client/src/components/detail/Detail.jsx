import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './Detail.module.css'; // Importa el archivo CSS Module

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

export default function Detail(props) {
   const { id } = useParams();
   const [character, setCharacter] = useState({});
   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               console.log(data);
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
      return () => setCharacter({});
   }, [id]);

  return (
     <div className={styles.detailContainer}>
        <h1>Detail</h1>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} className={styles.characterImage} />
        <h3>Status: {character.status}</h3>
        <h3>Specie: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Origin: {character.origin?.name}</h3>
        <h3>Location: {character.location?.name}</h3>
     </div>
  );
}
