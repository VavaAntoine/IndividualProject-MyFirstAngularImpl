package ramore.dto;

import ramore.entity.Employee;
import java.util.List;
import lombok.Data;

@Data
public class AttributeDto {

    private static final long serialVersionUID = 1L;

    private Integer attrId;

    private String attrName;

    private String attrValue;

    private List<Employee> employeeList;
    
}
