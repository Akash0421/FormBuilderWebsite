import { assets } from "../../assets/asset"
import styles from "./profile.module.css"

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
             
             <img src={assets.triangle} className={styles.img1} alt="" />
             <img src={assets.circle} className={styles.img2} alt="" />

            <div className={styles.profileContent}>
             <h1>Build advanced chatbots visually</h1>
             <p>Typebot gives you powerful blocks to create unique chat experiences. Embed them
              anywhere on your web/mobile apps and start collecting results like magic.</p>
             <button>Create a FormBot  for free</button>
            </div> 
               
        </div>
    )
}
