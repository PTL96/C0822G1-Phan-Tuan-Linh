package furama.conectbackend.repository.facility;

import furama.conectbackend.controller.facilityController.FacilityType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFacilityTypeRepository extends JpaRepository<FacilityType, Integer> {
}
