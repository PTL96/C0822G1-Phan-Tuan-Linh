package furama.conectbackend.controller.facilityController;

import furama.conectbackend.service.impl.FacilityTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/facilityType")
@CrossOrigin("*")
public class FacilityType {
    @Autowired
    private FacilityTypeService facilityTypeService;

    @GetMapping("")
    public ResponseEntity<List<FacilityType>> allList(){
        List<FacilityType> facilityTypeList = facilityTypeService.findAll();
        if (facilityTypeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(facilityTypeList, HttpStatus.OK);
    }
}
