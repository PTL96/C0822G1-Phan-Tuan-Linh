package furama.conectbackend.service.customer;

import furama.conectbackend.model.customer.Customer;

import java.util.List;

public interface ICustomerService {
    List<Customer> findAll();

    void save(Customer customer);

    Customer findById(int id);

    void delete(int id);

}
