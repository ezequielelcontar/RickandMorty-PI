// Card.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import styles from "./Card.module.css"; // Importa los estilos CSS modules

export default function Card(props) {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites);

   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(props.id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   }

   return (
      <div className={styles.cardContainer}>
         <button className={styles.button} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         <button className={styles.button} onClick={() => props.onClose(props.id)}>X</button>
         <h2 className={styles.name}>{props.name}</h2>
         <h4>Id: {props.id}</h4>
         <h4>Status: {props.status}</h4>
         <h4>Specie: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
         <Link className={styles.detailLink} to={`/detail/${props.id}`} >
            <img src={props.image} alt={props.name} />
         </Link>
      </div>
   );
}
