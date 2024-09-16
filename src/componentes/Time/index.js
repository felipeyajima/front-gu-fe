import Arquivo from '../Arquivo'
import './Time.css'

const Time = (props) => {
    return (
        <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='arquivos'>
            {props.data.map( data => <Arquivo file={data}/>)}
                
            </div>
        </section>
    )

}

export default Time