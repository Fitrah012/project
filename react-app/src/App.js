import "./App.css";
import { useState } from "react";
import Axios from "axios";


function App() {
  const [user_name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3333/User").then((response) => {
      setUserList(response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3333/create", {
      user_name: user_name,
      email: email,
      password: password,
    
      
    }).then(() => {
      setUserList([
        ...userList,
        {
          user_name: user_name,
          email: email,
          password: password,
        },
      ]);
    });
  };

  

 

  return (
    <div className="App container">
      <h1>Horizontal Form</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
            Username: 
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              onChange={(event) => {
                setUsername(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
          </div>
         
         
         
          <button onClick={addUser} class="btn btn-success">
            Sign in
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUser}>
          Show Employees
        </button>
        <br />
        <br />
        {userList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">username: {val.user_name}</p>
                <p className="card-text">email: {val.email}</p>
                <p className="card-text">password: {val.password}</p>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;