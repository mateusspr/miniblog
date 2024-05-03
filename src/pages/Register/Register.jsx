import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";
import { useEffect, useState } from "react";



const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const [confirmPassword, setConfirmPassWord] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.")
      return;
    }

    const res = await createUser(user)

    console.log(user);
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])


  return (
    <div className={styles.register}>
      <h1>Cadastre-se para poder postar!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Digite seu nome"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Crie sua senha"
            onChange={(e) => setPassWord(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Confirme sua senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassWord(e.target.value)}
            value={confirmPassword}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>)}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register