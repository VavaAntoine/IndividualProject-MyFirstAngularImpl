
package ramore.config;

import ramore.entity.Attribute;
import ramore.entity.Employee;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    // lock down Spring Data Rest endpoints exposure for PUT, POST, DELETE
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};
        // disale HTTP methods PUT, POST, DELETE
        config.getExposureConfiguration()
                .forDomainType(Attribute.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        config.getExposureConfiguration()
                .forDomainType(Employee.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
    }
    
}
