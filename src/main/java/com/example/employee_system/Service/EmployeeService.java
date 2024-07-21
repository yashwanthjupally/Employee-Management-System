package com.example.employee_system.Service;

import com.example.employee_system.Model.Employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
