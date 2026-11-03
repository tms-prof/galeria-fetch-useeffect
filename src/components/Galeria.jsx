
import { useState, useEffect } from "react";

function Galeria() {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/photos")

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
      <h2>Minha Galeria</h2>
      <div className="grid">
        {fotos.map(foto => (
          <article key={foto.id} className="card">
            <div className="img-conteiner">
               <img
                src={foto.url}
                alt={foto.title}
               />
            </div>
            <p>{foto.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Galeria;
