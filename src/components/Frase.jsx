import styles from './Frase.module.css'

function Frase({texto}){
    return(
        <>
            <div className={styles.fraseContainer}>
                <p className={styles.fraseContent}>{texto}</p>
            </div>
        </>
    )
}

export default Frase