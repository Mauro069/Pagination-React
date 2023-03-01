import { useState } from "react";
import { Paginacion } from "./Components/Paginacion";
import { Pokemons } from "./Data/Pokemons";
import styles from "./styles.module.scss";

function App() {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(3);

  const maximo = Pokemons.length / porPagina;

  return (
    <div className={styles.container}>
      <div className={styles.containerPoke}>
        {Pokemons.slice(
          (pagina - 1) * porPagina,
          (pagina - 1) * porPagina + porPagina
        ).map((pokemon, i) => (
          <div key={i} className={styles.pokeContainer}>
            <div className={styles.imgContainer}>
              <img src={pokemon.img} alt={pokemon.name} />
            </div>
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>

      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
}

export default App;
