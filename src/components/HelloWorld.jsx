import Frase from './Frase'

const soma = 10 + 21; 
const nome = "Allan";

function HelloWorld(){
    return (
        <>
            <div>
                <Frase texto = "React"/>
                <Frase texto = "JS"/>
                <h1>{soma}</h1>
                <Frase nome = {nome}/>
            </div>
        </>
    )

}

export default HelloWorld