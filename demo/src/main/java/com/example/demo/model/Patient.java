package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String patientCode;
    private String name;
    @OneToMany(mappedBy = "patient")
    @JsonBackReference
    private Set<Medical> medicals;

    public Patient() {
    }

    public Patient(int id, String patientCode, String name, Set<Medical> medicals) {
        this.id = id;
        this.patientCode = patientCode;
        this.name = name;
        this.medicals = medicals;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPatientCode() {
        return patientCode;
    }

    public void setPatientCode(String patientCode) {
        this.patientCode = patientCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Medical> getMedicals() {
        return medicals;
    }

    public void setMedicals(Set<Medical> medicals) {
        this.medicals = medicals;
    }
}