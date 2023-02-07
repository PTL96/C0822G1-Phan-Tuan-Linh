package furama.conectbackend.repository.customer;

import furama.conectbackend.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    @Query(value = "select * from customer where name like %:name%  and customer_type_id like %:customer_type% order by name ", nativeQuery = true)
    List<Customer> listCustomer(@Param("name") String name, @Param("customer_type") String customer_type);

}
