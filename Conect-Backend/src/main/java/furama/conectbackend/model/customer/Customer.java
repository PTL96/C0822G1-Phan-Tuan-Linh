package furama.conectbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String names;
    private String dayOfBirth;
    private String gender;
    private String idCard;
    private String phoneNumber;
    private String email;
    private String address;
    @Column(columnDefinition = "int default 1")
    private Integer deleteStatus;
    @ManyToOne
    private CustomerType customerType;
    @OneToMany(mappedBy = "customer")
    @JsonBackReference
    private Set<Contract> contracts;

}
