export default function Card(props) {

  return (
    <div id={props.id} className={props.className}>
      <h1 id="titulo">{props.titulo}</h1>
      <img id="imagem" alt={props.alt} src={props.src}></img>
      <p id="texto">{props.textContent}</p>
    </div>
  );
}
