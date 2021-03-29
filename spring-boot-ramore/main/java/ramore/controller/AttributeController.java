package ramore.controller;

import ramore.converter.AttributeDtoConverter;
import ramore.entity.Attribute;
import ramore.entity.Employee;
import ramore.service.AttributeServiceImpl;
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
@RequestMapping("/attribute")
public class AttributeController {

    @Autowired
    private AttributeServiceImpl service;

    @Autowired
    private AttributeDtoConverter converter;

    // Create
    @PostMapping
    public Attribute createAttribute(@RequestBody Attribute attribute) {
        return service.create(attribute);
    }

    // Read
    @GetMapping
    public List<Attribute> getAttributes() {
        return service.findAll();
    }

    // Read
    @GetMapping("search/employee/{id}")
    public List<Employee> getEmployeesByAttributeId(@PathVariable(value = "id") Integer attributeId) {
        return converter.entityToDto(service.findById(attributeId).get());
    }

    @GetMapping("/{id}")
    public Attribute getAttributeById(@PathVariable(value = "id") Integer attributeId) throws Exception {
        Optional<Attribute> optionalAttribute = service.findById(attributeId);
        return optionalAttribute.orElseThrow(() -> new Exception("Attribute not exists with id:" + attributeId));
    }

    //Update
    @PutMapping("/{id}")
    public void updateAttribute(@PathVariable(value = "id") Integer attributeId,
            @RequestBody Attribute newAttributeDetails) throws Exception {
        Optional<Attribute> optionalAttribute = service.findById(attributeId);
        optionalAttribute.orElseThrow(() -> new Exception("Attribute not exists with id:" + attributeId));
        newAttributeDetails.setAttrId(attributeId);
        service.update(newAttributeDetails);
    }

    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity deleteAttributeById(@PathVariable(value = "id") Integer attributeId) throws Exception {
        Optional<Attribute> optionalAttribute = service.findById(attributeId);
        optionalAttribute.orElseThrow(() -> new Exception("Attribute not exists with id:" + attributeId));
        service.delete(attributeId);
        return ResponseEntity.ok("Attribute deleted successfully, ID:" + attributeId);
    }

}
