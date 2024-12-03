import './App.css';
import { useState } from 'react';


function App() {
 const [formData, setFormData] = useState({
   username: '',
   password: '',
 });
 const [susess, setSusess] = useState(false);
 const [error, setError] = useState("");
  const hasFormSubmit = (e) => {
    e.preventDefault();
    if(formData.username === 'user' && formData.password === 'password') {
      setSusess(true);
    }else{
      setError("Invalid username or password");
    }
  }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  return (
    <div >
    
      <h1>Login Page</h1>
      {error!=="" && !susess  && <p>{error}</p>}
      {susess ? (<p>Welcome, user</p>):( <form onSubmit={(e)=>hasFormSubmit(e)} className="form"> 
        <label>Username:</label><input type="text" placeholder="username" name='username' value={formData.username} onChange={handleChange} required/>
        <label>Password:</label><input type="password" placeholder="password" name='password' value={formData.password} onChange={handleChange} required/>
        <button type="submit">Submit</button>
      </form>)}
     
    </div>
  );
}

export default App;
