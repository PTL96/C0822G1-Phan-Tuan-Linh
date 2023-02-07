package furama.conectbackend.repository.facility;

import furama.conectbackend.controller.facilityController.RentType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRentTypeRepository extends JpaRepository<RentType, Integer> {
}
