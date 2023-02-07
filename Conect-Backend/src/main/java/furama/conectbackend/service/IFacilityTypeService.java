package furama.conectbackend.service.facility;

import furama.conectbackend.controller.facilityController.FacilityType;

import java.util.List;

public interface IFacilityTypeService {
    List<FacilityType> findAll();
}
