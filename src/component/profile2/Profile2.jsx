import { assets } from "../../assets/asset"
import styles from "./profile2.module.css"



export default function Profile2() {
    return(
        <div>
             <div className={styles.profileCon}>
                <img src={assets.profileImg} alt="" />
             </div>
        </div>
    )
}