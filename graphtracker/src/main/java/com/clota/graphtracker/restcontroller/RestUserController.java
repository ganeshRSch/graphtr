package com.clota.graphtracker.restcontroller;

import com.clota.graphtracker.entity.Employee;
import com.clota.graphtracker.service.EmployeeService;
import com.clota.graphtracker.vo.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.ArrayList;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestUserController {

	/*
	 * @GetMapping("/") public String index() { return "/index.html"; }
	 */

	@Autowired
	EmployeeService employeeService;

	@GetMapping(path = "employees", produces = "application/json")
	public List<Employee> user() {

		return employeeService.fetchAll();

	}

	@PostMapping(path = "userInput", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void userInput(@RequestBody User user) {

		System.out.println("User :" + user.getEmail());
		System.out.println("Email :" + user.getEmail());
		System.out.println("Mobile :" + user.getMobileNumber());

	}
}
