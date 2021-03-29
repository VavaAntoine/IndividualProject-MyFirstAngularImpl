
package ramore.dao;

import ramore.entity.Attribute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface AttributeDao extends JpaRepository<Attribute, Integer> {
    
}
