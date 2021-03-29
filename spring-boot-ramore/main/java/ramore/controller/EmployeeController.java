package ramore.controller;

import ramore.dao.EmployeeDao;
import ramore.entity.Attribute;
import ramore.entity.Employee;
import ramore.service.AttributeServiceImpl;
import ramore.service.EmployeeServiceImpl;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl service;
    
    // Create
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return service.create(employee);
    }

    // Read
    @GetMapping
    public List<Employee> getEmployees() {
        return service.findAll();
    }
    
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable(value = "id") Integer employeeId) throws Exception {
        Optional<Employee> optionalEmployee = service.findById(employeeId);
        return optionalEmployee.orElseThrow(() -> new Exception("Employee not exists with id:" + employeeId));
    }

    //Update
    @PutMapping("/{id}")
    public void updateEmployee(@PathVariable(value = "id") Integer employeeId,
            @RequestBody Employee newEmployeeDetails) throws Exception {
        Optional<Employee> optionalEmployee = service.findById(employeeId);
        optionalEmployee.orElseThrow(() -> new Exception("Employee not exists with id:" + employeeId));
        newEmployeeDetails.setEmpId(employeeId);
        service.update(newEmployeeDetails);
    }

    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity deleteEmployeeById(@PathVariable(value = "id") Integer employeeId) throws Exception {
        Optional<Employee> optionalEmployee = service.findById(employeeId);
        optionalEmployee.orElseThrow(() -> new Exception("Employee not exists with id:" + employeeId));
        service.delete(employeeId);
        return ResponseEntity.ok("Employee deleted successfully, ID:" + employeeId);
    }

}
