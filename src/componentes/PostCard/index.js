import  styles from "./Post.module.css"
import { Link } from "react-router-dom"
import imagemCard from "../../img/dom-professor-otimizar tempo.jpeg"



const PostCard = ({titulo, id, autor, aoDeletar}) => {

    function aoEvento(){
        aoDeletar(
            {id: id}
        )
    }



    return(
        
        

            <div className={styles.post}>
        <Link to={`/post/${id}`}>
                <img 
                    className={styles.capa}
                    src={imagemCard}
                    alt="Imagem da capa do post"
                />

                <h2 className={styles.titulo}>{titulo}</h2>
                <h6>{autor}</h6>
                <button className={styles.botaoLer}>Ler</button>
        </Link>

        <Link to={`/post/formulario/${id}`}>
        {window.location.pathname == "/post/professor"? <button className={styles.botaoLer}>Editar</button> : ""}
        </Link>
                {window.location.pathname == "/post/professor"? <button onClick={aoEvento} className={styles.botaoLer}>Deletar</button> : ""}
            </div>
        
        
        

    )

}



export default PostCard