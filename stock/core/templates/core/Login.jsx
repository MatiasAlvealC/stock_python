import '../assets/styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Acceder</h1>
        <form>
          <input type="text" placeholder="Rut" className="login-input" />
          <input type="password" placeholder="Contraseña" className="login-input" />
          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
        <p className="signup-link"><a href="Register">Regístrate</a></p>
      </div>
    </div>
  );
}

export default Login;