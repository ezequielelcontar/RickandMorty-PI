import styles from './NotFound.module.css'; // Ajusta la ruta de importación según sea necesario

const error404 = "https://retouchcenter.org/wp-content/uploads/2019/04/error-4044.jpg";

export default function NotFound(props) {
  return (
    <div className={styles.container}>
      <img src={error404} alt="Not Found" className={styles.errorImage} />
    </div>
  );
}
