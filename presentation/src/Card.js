
export default function Card(props) {

    function Teste(e) {
        console.log(e.target.id);
        window.open('landing-page.html', '_self');
    }

    return (
        <div id={props.id} className={props.className} onClick={Teste}>
            <h1 id='titulo'>
                {props.titulo}
            </h1>
            <img id='imagem' alt={props.alt} src={props.src} ></img>
            <p id='texto'>
                {props.textContent}
            </p>
        </div>
    );
}
