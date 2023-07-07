import styles from './Footer.module.css'
// import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

function Footer() {
  return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>Facebook</li>
            <li>Instagram</li>  
            <li>Linkedin</li>
        </ul>
        <p>
            <span>Costs</span> &copy; 2023
        </p>
    </footer>
  )
}

export default Footer