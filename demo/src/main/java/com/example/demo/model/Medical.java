package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Medical {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String medicalCode;
    private String hospitalizedDay;
    private String hospitalDischargeDate;
    private String reason;
    private String treatments;
    private String doctor;
//    private Boolean flagDelete;
    @ManyToOne
    private Patient patient;

    public Medical() {
    }


    public Medical(int id, String medicalCode, String hospitalizedDay, String hospitalDischargeDate, String reason, String treatments, String doctor, Patient patient) {
        this.id = id;
        this.medicalCode = medicalCode;
        this.hospitalizedDay = hospitalizedDay;
        this.hospitalDischargeDate = hospitalDischargeDate;
        this.reason = reason;
        this.treatments = treatments;
        this.doctor = doctor;
        this.patient = patient;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMedicalCode() {
        return medicalCode;
    }

    public void setMedicalCode(String medicalCode) {
        this.medicalCode = medicalCode;
    }

    public String getHospitalizedDay() {
        return hospitalizedDay;
    }

    public void setHospitalizedDay(String hospitalizedDay) {
        this.hospitalizedDay = hospitalizedDay;
    }

    public String getHospitalDischargeDate() {
        return hospitalDischargeDate;
    }

    public void setHospitalDischargeDate(String hospitalDischargeDate) {
        this.hospitalDischargeDate = hospitalDischargeDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getTreatments() {
        return treatments;
    }

    public void setTreatments(String treatments) {
        this.treatments = treatments;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }



}