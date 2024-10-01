import React, { useEffect, useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt with', { username, password });
    await fetch('http://10.10.5.156/cake4/rd_cake/dashboard/authenticate.json', {
        method: 'POST', // or 'PUT' for updating
        body: JSON.stringify({username:username,password:password}) // Convert JavaScript object to JSON string
      }).then(res=>{
        console.log(res);
        alert(res.data)
        
      }).catch(err=>{
        console.log(err);
     alert(err)
      })
  };
  useEffect(()=>{
    // handleSubmit()
  },[])

  return (
    <div className="login-container" style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={(eventh)=>{handleSubmit(eventh)}}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '20px',
    width:'100%'
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Login;