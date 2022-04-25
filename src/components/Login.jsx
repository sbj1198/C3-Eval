import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  //  use reqres to log user in.

  const {handleAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData({...formData,[id]: value});
  };
  
  async function loginStats(){
   try{
    const res = await axios.post("https://reqres.in/api/login", formData);
    // console.log(res.data.token);
    const t = res.data.token;
    if(res.data.token){
      handleAuth(true, t);
      navigate("/");
    }
    else{
      handleAuth(false, t);
    }
   }
   catch(e){
     console.log(e.message);
   }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    loginStats();
  };



  return (
    <form className="loginform">
      <input
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        id="email"
      />
      <input
        onChange={handleChange}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        id="password"
      />
      <input onClick={handleSubmit} type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
