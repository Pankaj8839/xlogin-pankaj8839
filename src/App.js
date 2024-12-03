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
      setError("Invalid Username or Password");
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
      {susess ? (<p>Welcome User!</p>):( <form onSubmit={(e)=>hasFormSubmit(e)} className="form"> 
        <label>Username:<input type="text" placeholder="Username" name='username' value={formData.username} onChange={handleChange} required/></label>
        <label>Password:<input type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange} required/></label>
        <button type="submit">Login</button>
      </form>)}
     
    </div>
  );
}

export default App;
