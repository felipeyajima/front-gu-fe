import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'


const Formulario = (props) => {

    

    const backend_post = process.env.REACT_APP_BACKEND_POST

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    let value = params.bucket;
    let backend1 = params.backend
    let port1 = params.port

    console.log('nome do bucket: ' + value)
    console.log('nome do backend: ' + backend1)
    console.log('nome do backend: ' + port1)

    const end = 'http://' + backend1 + ':' + port1 + '/buckets/' + value + '/objects'


    console.log('POST endereco final: ' + end)

    const [file, setFile] = useState('')
    const [text, setText] = useState('')


    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoArquivoCadastrado({
            file,
            text
        })

        console.log("nome do arquivo: " + file)
        console.log("conteudo do arquivo: " + text)

        fetch(end, {
            method: "POST",
            body: JSON.stringify({
                "objectName": file,
                "text": text
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            


        setFile('')
        setText('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Envio de arquivos Bucket S3</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="FileName" 
                    placeholder="arquivo.txt"
                    valor={file}
                    aoAlterado={valor => setFile(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Text" 
                    placeholder="Texto dentro do arquivo"
                    valor={text}
                    aoAlterado={valor => setText(valor)} 
                />
                <Botao>
                    Enviar arquivo
                </Botao>
            </form>
        </section>
    )

}

export default Formulario