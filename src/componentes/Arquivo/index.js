import './Arquivo.css'

const Arquivo = (props) => {

    const imagemfile = process.env.REACT_APP_IMAGEM_FILE

    return (<div className='arquivo'>
        <div className='cabecalho'>
            <img src={imagemfile} alt='Felipe Yajima'/>
        </div>
        <div className='rodape'>
            <h4>{props.file}</h4>
            <h5>conteudo do arquivo</h5>
        </div>      
    </div>)
}

export default Arquivo