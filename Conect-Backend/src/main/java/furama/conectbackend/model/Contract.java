package furama.conectbackend.model.contract;

import com.fasterxml.jackson.annotation.JsonBackReference;
import furama.conectbackend.model.customer.Customer;
import furama.conectbackend.model.facilityy.Facility;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String starDay;
    private String endDay;
    private double deposit;
    @JsonBackReference
    @ManyToOne
    private Facility facility;
    @JsonBackReference
    @ManyToOne
    private Customer customer;
    @JsonBackReference
    @OneToMany(mappedBy = "contract")
    private Set<ContractDetail> contractDetail;

    public Contract() {
    }

    public Contract(int id, String starDay, String endDay, double deposit, Facility facility, Customer customer, Set<ContractDetail> contractDetail) {
        this.id = id;
        this.starDay = starDay;
        this.endDay = endDay;
        this.deposit = deposit;
        this.facility = facility;
        this.customer = customer;
        this.contractDetail = contractDetail;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStarDay() {
        return starDay;
    }

    public void setStarDay(String starDay) {
        this.starDay = starDay;
    }

    public String getEndDay() {
        return endDay;
    }

    public void setEndDay(String endDay) {
        this.endDay = endDay;
    }

    public double getDeposit() {
        return deposit;
    }

    public void setDeposit(double deposit) {
        this.deposit = deposit;
    }

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Set<ContractDetail> getContractDetail() {
        return contractDetail;
    }

    public void setContractDetail(Set<ContractDetail> contractDetail) {
        this.contractDetail = contractDetail;
    }
}
