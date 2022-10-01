package com.clota.graphtracker.service;

import java.util.List;

import com.clota.graphtracker.entity.Employee;

public interface EmployeeService {
	
	public Employee save(Employee employee);
	
	public List<Employee> fetchAll();
	
	public Employee fetchById(Integer employeeId);

}
