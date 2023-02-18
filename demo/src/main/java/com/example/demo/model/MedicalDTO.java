//package com.example.demo.model;
//
//import org.springframework.validation.Errors;
//import org.springframework.validation.Validator;
//
//import javax.validation.constraints.NotEmpty;
//
//public class MedicalDTO implements Validator {
//    private int id;
//    private String medicalCode;
//    @NotEmpty(message = "Can't be left blank")
//    private String hospitalizedDay;
//    @NotEmpty(message = "Can't be left blank")
//    private String hospitalDischargeDate;
//    @NotEmpty(message = "Can't be left blank")
//    private String reason;
//    @NotEmpty(message = "Can't be left blank")
//    private String treatments;
//    @NotEmpty(message = "Can't be left blank")
//    private String doctor;
//
//    @Override
//    public boolean supports(Class<?> clazz) {
//        return false;
//    }
//
//    @Override
//    public void validate(Object target, Errors errors) {
//
//    }
//
//    public MedicalDTO() {
//    }
//
//    public MedicalDTO(int id, String medicalCode, String hospitalizedDay, String hospitalDischargeDate, String reason, String treatments, String doctor) {
//        this.id = id;
//        this.medicalCode = medicalCode;
//        this.hospitalizedDay = hospitalizedDay;
//        this.hospitalDischargeDate = hospitalDischargeDate;
//        this.reason = reason;
//        this.treatments = treatments;
//        this.doctor = doctor;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getMedicalCode() {
//        return medicalCode;
//    }
//
//    public void setMedicalCode(String medicalCode) {
//        this.medicalCode = medicalCode;
//    }
//
//    public String getHospitalizedDay() {
//        return hospitalizedDay;
//    }
//
//    public void setHospitalizedDay(String hospitalizedDay) {
//        this.hospitalizedDay = hospitalizedDay;
//    }
//
//    public String getHospitalDischargeDate() {
//        return hospitalDischargeDate;
//    }
//
//    public void setHospitalDischargeDate(String hospitalDischargeDate) {
//        this.hospitalDischargeDate = hospitalDischargeDate;
//    }
//
//    public String getReason() {
//        return reason;
//    }
//
//    public void setReason(String reason) {
//        this.reason = reason;
//    }
//
//    public String getTreatments() {
//        return treatments;
//    }
//
//    public void setTreatments(String treatments) {
//        this.treatments = treatments;
//    }
//
//    public String getDoctor() {
//        return doctor;
//    }
//
//    public void setDoctor(String doctor) {
//        this.doctor = doctor;
//    }
//}
