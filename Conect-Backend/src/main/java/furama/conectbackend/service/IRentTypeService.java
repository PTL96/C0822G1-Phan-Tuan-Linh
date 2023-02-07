package furama.conectbackend.service.facility;

import furama.conectbackend.controller.facilityController.RentType;

import java.util.List;

public interface IRentTypeService {
    List<RentType> findAll();
}
