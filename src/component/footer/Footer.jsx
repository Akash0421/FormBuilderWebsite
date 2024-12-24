import styles from "./footer.module.css"


export default function Footer() {
  return (
    <div>
      <footer className={styles.footerCon}>
        <div>
          <div className={styles.logo}>FormBot</div>
          <p>Made with ❤️ by @cuvette</p>
        </div>
        <div>
          <h3>Product</h3>
          <ul>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">GitHub repository</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">OSS Friends</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
