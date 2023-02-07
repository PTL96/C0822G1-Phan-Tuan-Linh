package furama.conectbackend.service.customer;

import furama.conectbackend.model.customer.Customer;
import furama.conectbackend.model.customer.CustomerType;

import java.util.List;

public interface ICustomerTypeService {
    List<CustomerType> findAll();
}
