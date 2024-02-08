import React from 'react';
import Card from "../card/Card.jsx";
import styles from './Cards.module.css'; // Importando el CSS Module

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.cardsContainer}>
      {
        !characters.length ?
          <h2 className={styles.noCharacters}>Por favor ingrese un id...</h2> :
          characters.map(character => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
              onClose={onClose}
            />
          ))
      }
    </div>
  );
}
