package furama.conectbackend.service.contract;

import furama.conectbackend.model.contract.AttachFacility;

import java.util.List;

public interface IAttachFacilityService {
    List<AttachFacility> findAll();
}
