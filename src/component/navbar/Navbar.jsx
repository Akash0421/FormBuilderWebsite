import styles from "./navbar.module.css"
import {assets} from "../../assets/asset"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate(); 

    const  handleSignIn = () => {
         navigate("/login");
    }

    const handleFormBot = () => {
        navigate("/dashboard");
    }
    return (
        <div>
             <nav className={styles.navbar}>
                 <div className={styles.navbarLogo}>
                    <img src={assets.logo} alt="FormBot" />
                    <span>FormBot</span>
                 </div>

                <div className={styles.navbarLinks}>
                    <button onClick={handleSignIn}>Sign In</button>
                    <button onClick={handleFormBot}>Create a FormBot</button>
                </div>
             </nav>
        </div>
    )
}