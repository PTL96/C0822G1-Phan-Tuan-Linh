package com.example.demo.service.impl;

import com.example.demo.model.Medical;
import com.example.demo.repository.IMedicalRepository;
import com.example.demo.service.IMedicalService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalService implements IMedicalService {
    @Autowired
    private IMedicalRepository iMedicalRepository;
    @Override
    public List<Medical> allListMedical() {
        return iMedicalRepository.allList();
    }

    @Override
    public Medical findById(int id) {
        return iMedicalRepository.findById(id).get();
    }

    @Override
    public void deleteMedical(int id) {
        iMedicalRepository.deleteMedical(id);
    }

    @Override
    public void save(Medical medical) {
        iMedicalRepository.save(medical);
    }
}
