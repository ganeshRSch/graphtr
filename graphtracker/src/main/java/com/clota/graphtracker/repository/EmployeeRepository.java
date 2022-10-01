package com.clota.graphtracker.repository;

import org.springframework.stereotype.Repository;

import com.clota.graphtracker.entity.Employee;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

}
