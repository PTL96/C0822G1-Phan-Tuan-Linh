package com.example.demo.service;

import com.example.demo.model.Medical;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;



public interface IMedicalService {


    Medical findById(int id);
    void deleteMedical(int id);

    void save(Medical medical);

    Page<Medical> allListMedical(Pageable pageable);
}
