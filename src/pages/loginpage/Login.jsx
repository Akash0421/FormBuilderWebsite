import { useState } from "react"
import {login} from "../../services/index"
import styles from "./login.module.css"
// import { assets } from "../../assets/asset"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export default function  Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)
    const [formErrors, setFormErrors] = useState({
        email: null,
        password: null,
    })
    const handleRegister = async (e) => {
        e.preventDefault()
        let errors = false;
        setFormErrors((formErrors) => { return { ...formErrors, email: null, name: null, phone: null, password: null } })
        if (!formData.email || formData.email.length < 1 || !formData.email.includes("@") || !formData.email.includes(".")) {
            setFormErrors((formErrors) => { return { ...formErrors, email: "Email is invalid" } })
            errors = true
        }
        if (!formData.password) {
            setFormErrors((formErrors) => { return { ...formErrors, password: "Password is required" } })
            errors = true
        }
        if (errors) {
            return
        }
        try {
            setLoading(() => true)
            const response = await login(formData)
            toast.success(response.message)
            console.log(response)
            if (response.token) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("userId", response.id);
                localStorage.setItem("username", response.name);
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(() => false)
        }
    }
  return (
    <div className={styles.loginContainer}>

            <form className={styles.form} onSubmit={handleRegister}>
                <label htmlFor="email">Email</label>
                <input value={formData.email} type="text" placeholder="example@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
                 
                 <label htmlFor="password">Password</label>
                <input value={formData.password} type="password" placeholder="At least 8 character" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                {formErrors.password && <p className={styles.error}>{formErrors.password}</p>}

                <button disabled={loading} type="submit">{loading ? "Loading..." : "Continue"}</button>

                <div className={styles.regipromp}>
                  <p>
                     Already have an account ? {""}
                    <span
                      className={styles.signUp}
                      onClick={() => navigate("/register")}
                    >
                           Register
                    </span>
                 </p>
                 </div>
            </form>
            
      </div>
  )
}
