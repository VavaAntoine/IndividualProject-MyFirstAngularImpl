package ramore.converter;

import ramore.entity.Attribute;
import ramore.entity.Employee;
import ramore.service.EmployeeServiceImpl;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AttributeDtoConverter {

    @Autowired
    private EmployeeServiceImpl service;
    
    public List<Employee> entityToDto(Attribute attribute) {
        List<Employee> emps = attribute.getEmployeeList();
        List<Employee> employeesByAttribute = new ArrayList();
        for (int i = 0; i < emps.size(); i++) {
            int id = emps.get(i).getEmpId();
            Employee tempEmp = service.findById(id).get();
            employeesByAttribute.add(tempEmp);

        }
        return employeesByAttribute;
    }

}
