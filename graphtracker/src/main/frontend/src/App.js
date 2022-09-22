import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/userInput", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      //let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-group" >
      <form onSubmit={handleSubmit}>
        <input className="form-control"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input className="form-control"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="form-control"
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;