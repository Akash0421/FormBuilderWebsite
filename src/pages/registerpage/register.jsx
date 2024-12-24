// import { assets } from ".././assets/asset";
import { register } from "../../services/index";
import styles from "./register.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: null,
    name: null,
    phone: null,
    password: null,
    confirmPassword: null,
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    let errors = false;

    // Reset form errors
    setFormErrors({
      email: null,
      name: null,
      phone: null,
      password: null,
      confirmPassword: null,
    });

    // Validation
    if (!formData.email || !formData.email.includes("@") || !formData.email.includes(".")) {
      setFormErrors((formErrors) => ({ ...formErrors, email: "Email is invalid" }));
      errors = true;
    }
    if (!formData.name || formData.name.length === 0) {
      setFormErrors((formErrors) => ({ ...formErrors, name: "Name is required" }));
      errors = true;
    }
    if (!formData.password) {
      setFormErrors((formErrors) => ({ ...formErrors, password: "Password is required" }));
      errors = true;
    }
    if (formData.password && formData.password.length < 6) {
      setFormErrors((formErrors) => ({ ...formErrors, password: "Password must be at least 6 characters" }));
      errors = true;
    }
    if (!formData.confirmPassword) {
      setFormErrors((formErrors) => ({ ...formErrors, confirmPassword: "Confirm Password is required" }));
      errors = true;
    }
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setFormErrors((formErrors) => ({ ...formErrors, confirmPassword: "enter same password in both fields" }));
      errors = true;
    }

    if (errors) {
      return;
    }

    try {
      setLoading(true);
      const response = await register(formData);
      toast.success(response.message);
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleRegister}>
        <label htmlFor="name">Name</label>
        <input
          value={formData.name}
          type="text"
          placeholder="eg. John A"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {formErrors.name && <p className={styles.error}>{formErrors.name}</p>}

        <label htmlFor="email">Email</label>
        <input
          value={formData.email}
          type="email"
          placeholder="Example@gmail.com"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          value={formData.password}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {formErrors.password && <p className={styles.error}>{formErrors.password}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={formData.confirmPassword}
          type="password"
          placeholder="Confirm your password"
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
        {formErrors.confirmPassword && <p className={styles.error}>{formErrors.confirmPassword}</p>}

        <button disabled={loading} type="submit">
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <span>OR</span>
        <button>
          Sign Up with Google
        </button>

             <p>
                Already have an account ? {""}
             <span
                   className={styles.signUp}
                   onClick={() => navigate("/login")}
             >
                login
            </span>
            </p>
     

      </form>
      </div>

    </div>
  );
}
