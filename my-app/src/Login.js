import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [success, setsuccess] = useState(false)
  const nav = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
    const postdata = { email, password };

      const datas = await axios.post("http://localhost:7789/log", postdata);
      console.log(datas.data);
      setsuccess(true)
      
      localStorage.setItem("logindata",JSON.stringify(datas.data))

    } catch (error) {
      console.log("error occurred");
    }
  };

  return (
    <div>
    {success ? (nav("/")):(<form
      style={{ marginLeft: "20%", marginRight: "20%", marginTop: "5%" }}
      onSubmit={onsubmit}
    >
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>)}
    </div>
  );
}

export default Login;
