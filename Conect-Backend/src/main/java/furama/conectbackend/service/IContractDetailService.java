package furama.conectbackend.service.contract;

import furama.conectbackend.model.contract.ContractDetail;

import java.util.List;

public interface IContractDetailService {
    List<ContractDetail> findAll();
}
