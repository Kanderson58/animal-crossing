const Login = ({setLoggedIn}) => {
  return (
    <p onClick={() => setLoggedIn(true)}>Go fishing!</p>
  )
}

export default Login;