package com.example.demo.service.impl;

import com.example.demo.model.Patient;
import com.example.demo.repository.IPatientRepository;
import com.example.demo.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService implements IPatientService {
    @Autowired
    private IPatientRepository iPatientRepository;

    @Override
    public List<Patient> getList() {
        return iPatientRepository.allList();
    }
}
