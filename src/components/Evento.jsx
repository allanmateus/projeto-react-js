import Button from "./Evento/Button"


function Evento({numero}){
    
    function meuEvento(){
        console.log(`Opa, fui ativado ${numero}`)
    }
    
    return(
        <>
            <p>Clique para disparar um evento</p>
            <Button event = {meuEvento} text= "Primeiro evento"/>
        </>
    )

}

export default Evento