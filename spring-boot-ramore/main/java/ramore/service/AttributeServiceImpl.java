package ramore.service;

import ramore.dao.AttributeDao;
import ramore.dao.EmployeeDao;
import ramore.entity.Attribute;
import ramore.entity.Employee;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class AttributeServiceImpl {

    @Autowired
    private AttributeDao dao;
    
    @Autowired
    private EmployeeDao eDao;
    
    // Create
    public Attribute create(Attribute attribute) {
        Attribute attr = dao.save(attribute);
        return attr;
    }

    // Read
    public List<Attribute> findAll() {
        return dao.findAll();
    }

    public Optional<Attribute> findById(int id) {
        Optional<Attribute> attr = dao.findById(id);
        return attr;
    }

    // Update
    public void update(Attribute attribute) {
        dao.saveAndFlush(attribute);
    }

    // Delete
    public void delete(int id) {
        Attribute attr = dao.findById(id).get();
        List<Employee> emps = attr.getEmployeeList();
        int s = emps.size();
        for (int i = 0; i < s; i++) {
           Employee emp = emps.get(i);
           List<Attribute> attrs = emp.getAttributeList();
           attrs.remove(attr);
           emp.setAttributeList(attrs);  
           eDao.saveAndFlush(emp);
        }
        dao.deleteById(id);
    }

}
