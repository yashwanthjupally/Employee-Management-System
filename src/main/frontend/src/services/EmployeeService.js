import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    saveEmployee(Employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, Employee);
    }
    getAllEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    updateEmployee(Employee, id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id, Employee);
    }

}

export default new EmployeeService();