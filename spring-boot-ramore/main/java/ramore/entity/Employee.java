package ramore.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;


@Entity
@Table(name = "employee", catalog = "ramore", schema = "")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Employee.findAll", query = "SELECT e FROM Employee e")})
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "emp_id")
    private Integer empId;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "emp_name")
    private String empName;

    @Basic(optional = false)
    @NotNull
    @Column(name = "emp_date_of_birth")
    @Temporal(TemporalType.DATE)
    private Date empDateOfBirth;

    @Basic(optional = false)
    @NotNull
    @Column(name = "emp_has_car")
    private boolean empHasCar;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 200)
    @Column(name = "emp_address")
    private String empAddress;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "emp_latitude")
    private String empLatitude;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "emp_longitude")
    private String empLongitude;

    @JoinTable(name = "employee_attribute", joinColumns = {
        @JoinColumn(name = "employee_emp_id", referencedColumnName = "emp_id")}, inverseJoinColumns = {
        @JoinColumn(name = "attribute_attr_id", referencedColumnName = "attr_id")})
    @ManyToMany
    private List<Attribute> attributeList;

    public Employee() {
    }

    public Employee(Integer empId) {
        this.empId = empId;
    }

    public Employee(Integer empId, String empName, Date empDateOfBirth, boolean empHasCar,
            String empAddress, String empLatitude, String empLongitude) {
        this.empId = empId;
        this.empName = empName;
        this.empDateOfBirth = empDateOfBirth;
        this.empHasCar = empHasCar;
        this.empAddress = empAddress;
        this.empLatitude = empLatitude;
        this.empLongitude = empLongitude;

    }

    public Integer getEmpId() {
        return empId;
    }

    public void setEmpId(Integer empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public Date getEmpDateOfBirth() {
        return empDateOfBirth;
    }

    public void setEmpDateOfBirth(Date empDateOfBirth) {
        this.empDateOfBirth = empDateOfBirth;
    }

    public boolean getEmpHasCar() {
        return empHasCar;
    }

    public void setEmpHasCar(boolean empHasCar) {
        this.empHasCar = empHasCar;
    }

    public String getEmpAddress() {
        return empAddress;
    }

    public void setEmpAddress(String empAddress) {
        this.empAddress = empAddress;
    }

    public String getEmpLatitude() {
        return empLatitude;
    }

    public void setEmpLatitude(String empLatitude) {
        this.empLatitude = empLatitude;
    }

    public String getEmpLongitude() {
        return empLongitude;
    }

    public void setEmpLongitude(String empLongitude) {
        this.empLongitude = empLongitude;
    }

    @XmlTransient
    public List<Attribute> getAttributeList() {
        return attributeList;
    }

    public void setAttributeList(List<Attribute> attributeList) {
        this.attributeList = attributeList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (empId != null ? empId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Employee)) {
            return false;
        }
        Employee other = (Employee) object;
        if ((this.empId == null && other.empId != null) || (this.empId != null && !this.empId.equals(other.empId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ramore.entity.Employee[ empId=" + empId + " ]";
    }

}
