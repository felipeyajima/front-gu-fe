
import './Arquivo.css'


const Arquivo = (props) => {

    const imagemfile = process.env.REACT_APP_IMAGEM_FILE

    return (<div className='arquivo'>
        <div className='cabecalho'>
            <img src="/imagens/file.png" alt='File' width={100} height={100}/>
        </div>
        <div className='rodape'>
            <h4>{props.file}</h4>
        </div>      
    </div>)
}

export default Arquivo