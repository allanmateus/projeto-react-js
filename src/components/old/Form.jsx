import { useState } from "react"


function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(`O usuário: ${name} foi cadastrado com a senha: ${password}`)

    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placheholder="Digite o seu nome"  value = {name} onChange = {(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name = "password" placheholder = "Digite a sua senha" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" id="submit-form" name = "submit-form"/>
                </div>
            </form>
        </div>
    )
}

export default Form