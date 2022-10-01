import React, { useState, useEffect } from 'react';

const Employee = () => {
	const [employee, setEmployee] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8081/employees')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmployee(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div className="posts-container">
			{employee.map((employee) => {
				return (
					<div className="post-card" key={employee.id}>
						<h2 className="post-title">{employee.name}</h2>
						<p className="post-body">{employee.address}</p>
						<div className="button">
							<div className="delete-btn">Delete</div>
						</div>
					</div>
				);
			})}
		</div>


	);
};

export default Employee;