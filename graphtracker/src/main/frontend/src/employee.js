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
			<table class="table table-striped table-bordered table-sm">
				<thead>
					<tr>
						<th scope="col">Employee Id</th>
						<th scope="col">Name</th>
						<th scope="col">City</th>
					</tr>
				</thead>
				<tbody>

					{employee.map((employee) => {
						return (

							<tr>
								<td>{employee.id}</td>
								<td>{employee.name}</td>
								<td>{employee.address}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>


	);
};

export default Employee;