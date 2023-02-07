package furama.conectbackend.repository.facility;

import furama.conectbackend.model.facilityy.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFacilityRepository extends JpaRepository<Facility, Integer> {
}
