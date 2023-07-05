import { useState } from "react"


function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o usuário!")
    }

    const [name, setName] = useState(0)
    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placheholder="Digite o seu nome" onChange = {(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name = "password" value = "Digite a sua senha"/>
                </div>
            </form>
        </div>
    )
}

export default Form