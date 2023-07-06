import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <p>{marca} - {ano_lancamento}</p>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: "Sem marca",
    ano_lancamento: "Desconhecido"
}

export default Item