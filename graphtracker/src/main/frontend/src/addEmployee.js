import { useState } from "react";

function AddEmployee() {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [message, setMessage] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch("http://localhost:8081/addEmployee", {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					id:id,
					name: name,
					address: address,
				}),
			});
			//let resJson = await res.json();
			if (res.status === 200) {
				setId("");
				setName("");
				setAddress("");
				setMessage("User created successfully");
			} else {
				setMessage("Some error occurred");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="form-group-sm row" >
			<form onSubmit={handleSubmit}>
				<input className="form-control input-sm"
					type="text"
					value={id}
					placeholder="EmployeeID"
					onChange={(e) => setId(e.target.value)}
				/>
				<input className="form-control input-sm"
					type="text"
					value={name}
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input className="form-control input-sm"
					type="text"
					value={address}
					placeholder="City"
					onChange={(e) => setAddress(e.target.value)}
				/>


				<button type="submit" className="btn btn-primary">Create</button>

				<div className="message">{message ? <p>{message}</p> : null}</div>
			</form>
		</div>
	);
}

export default AddEmployee;