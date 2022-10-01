package com.clota.graphtracker.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clota.graphtracker.entity.Employee;
import com.clota.graphtracker.repository.EmployeeRepository;
import com.clota.graphtracker.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public Employee save(Employee employee) {

		employeeRepository.save(employee);
		return employee;

	}

	@Override
	public List<Employee> fetchAll() {

		return (List<Employee>) employeeRepository.findAll();

	}

	@Override
	public Employee fetchById(Integer employeeId) {

		Optional<Employee> employee = employeeRepository.findById(employeeId);
		return employee.get();
	}

}
