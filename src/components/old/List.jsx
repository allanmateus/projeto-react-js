import Item from "./item"


function List(){
    return(
        <>
            <h2>Minha lista</h2>
            <ul>
                <Item marca = "Xiaomi" ano_lancamento = {2021}/>
                <Item marca = "Apple"  ano_lancamento = {2022} />
                <Item marca = "Motorola" ano_lancamento = {2023} />
                <Item marca = "Samsung" ano_lancamento = {2020} />
            </ul>
        </>
    )

}

export default List