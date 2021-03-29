package ramore.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.io.Serializable;
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
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;


@Entity
@Table(name = "attribute", catalog = "ramore", schema = "")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Attribute.findAll", query = "SELECT a FROM Attribute a")})
public class Attribute implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "attr_id")
    private Integer attrId;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "attr_name")
    private String attrName;

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "attr_value")
    private String attrValue;

    @JsonBackReference(value = "ManyToMany")
    @ManyToMany(mappedBy = "attributeList")
    private List<Employee> employeeList;

    public Attribute() {
    }

    public Attribute(Integer attrId) {
        this.attrId = attrId;
    }

    public Attribute(Integer attrId, String attrName, String attrValue) {
        this.attrId = attrId;
        this.attrName = attrName;
        this.attrValue = attrValue;
    }

    public Integer getAttrId() {
        return attrId;
    }

    public void setAttrId(Integer attrId) {
        this.attrId = attrId;
    }

    public String getAttrName() {
        return attrName;
    }

    public void setAttrName(String attrName) {
        this.attrName = attrName;
    }

    public String getAttrValue() {
        return attrValue;
    }

    public void setAttrValue(String attrValue) {
        this.attrValue = attrValue;
    }

    @XmlTransient
    public List<Employee> getEmployeeList() {
        return employeeList;
    }

    public void setEmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (attrId != null ? attrId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Attribute)) {
            return false;
        }
        Attribute other = (Attribute) object;
        if ((this.attrId == null && other.attrId != null) || (this.attrId != null && !this.attrId.equals(other.attrId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ramore.entity.Attribute[ attrId=" + attrId + " ]";
    }

}
