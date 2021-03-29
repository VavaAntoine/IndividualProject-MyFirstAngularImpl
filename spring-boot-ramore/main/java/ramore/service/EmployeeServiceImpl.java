package ramore.service;

import ramore.dao.AttributeDao;
import ramore.dao.EmployeeDao;
import ramore.entity.Attribute;
import ramore.entity.Employee;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EmployeeServiceImpl {

    @Autowired
    private EmployeeDao dao;
    @Autowired
    private AttributeDao adao;

    // Create
    public Employee create(Employee employee) {
        Employee emp = dao.save(employee);
        return emp;
    }

    // Read
    public List<Employee> findAll() {
        return dao.findAll();
    }

    public Optional<Employee> findById(int id) {
        Optional<Employee> emp = dao.findById(id);
        return emp;
    }

    // Update
    public void update(Employee employee) {
        dao.saveAndFlush(employee);
    }

    // Delete
    public void delete(int id) {
        dao.deleteById(id);
    }


}
