
import { useState, useEffect } from "react";

function Galeria() {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/photos?_limit=12")

      .then(resposta => resposta.json())

      .then(dados => {
        setFotos(dados);
      })

      .catch(erro => {
        console.log("Erro ao buscar fotos:", erro);
      });

  }, []);

  return (
    <section className="galeria">

      <h1>Minha Galeria</h1>

      <div className="grid">

        {fotos.map(foto => (

          <article key={foto.id} className="card">

            <img
              src={foto.thumbnailUrl}
              alt={foto.title}
            />

            <h3>{foto.title}</h3>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Galeria;
