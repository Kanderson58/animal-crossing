import './Login.css'

const Login = ({setLoggedIn}) => {
  return (
    <div className="ocean">
      <div className="fish"></div>
      <div className="jellyfish"></div>
      <div className="shark"></div>
      <div className="turtle"></div>
      <button className="login-button" onClick={() => setLoggedIn(true)}>Go fishing!</button>
    </div>
  )
}

export default Login;
