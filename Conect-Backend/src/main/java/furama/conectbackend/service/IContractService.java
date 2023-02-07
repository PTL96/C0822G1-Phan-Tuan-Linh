package furama.conectbackend.service.contract;

import furama.conectbackend.model.contract.Contract;

import java.util.List;

public interface IContractService {
    List<Contract> findAll();

    void save(Contract contract);

    Contract findById(int id);

    void delete(int id);
}
