// import {assets} from "../../assets/asset"
import Navbar from "../../component/navbar/Navbar";
import Profile from "../../component/profile/Profile"
import Profile2 from "../../component/profile2/Profile2";
import Footer from "../../component/footer/Footer"
import styles from "./home.module.css"
// import {useNavigate} from "react-router-dom"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
             <Navbar/>
             <Profile/>
             <Profile2/>
             <Footer/>
        </div>
    );
}

