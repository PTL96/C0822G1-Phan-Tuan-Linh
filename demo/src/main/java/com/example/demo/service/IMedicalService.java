package com.example.demo.service;

import com.example.demo.model.Medical;


import java.util.List;


public interface IMedicalService {
    List<Medical> allListMedical();

    Medical findById(int id);
    void deleteMedical(int id);

    void save(Medical medical);
}
