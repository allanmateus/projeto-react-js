import { Link } from "react-router-dom"
import  styles   from './Navbar.module.css'
import Container from "./Container"
import  logo  from '../img/logo.png'
 
function Navbar(){
    return(
        <div>
            <nav className={styles.menu}>
                <Container>
                    <Link to = '/'>
                        <img src={logo} alt="Costs" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to = "/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to = "/contact">Contact</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to = "/company">Company</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to = "/newproject">NewProject</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </div>
    )

}

export default Navbar