package com.example.demo.controller;

import com.example.demo.model.Medical;
import com.example.demo.service.impl.MedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/medical")
@CrossOrigin("*")
public class MedicalController {
    @Autowired
    private MedicalService medicalService;

    @GetMapping("")
    public ResponseEntity<Page<Medical>> getAll(@PageableDefault(page = 0,size = 3) Pageable pageable) {
        Page<Medical> medicalList = medicalService.allListMedical(pageable);
        if (medicalList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(medicalList, HttpStatus.OK);
    }

    @PostMapping( "")
    public ResponseEntity<Medical> create(@RequestBody Medical medical) {
        medicalService.save(medical);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Medical> delete(@PathVariable("id") int id) {
        Medical medical = medicalService.findById(id);
        if (medical == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        medicalService.deleteMedical(id);
        return new ResponseEntity<>(medical, HttpStatus.OK);
    }

    @PatchMapping("update/{id}")
    public ResponseEntity<Medical> update(@PathVariable("id") int id, @RequestBody Medical medical) {
        Medical medical1 = medicalService.findById(id);
        if (medical1 == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        medical.setId(medical1.getId());
        medicalService.save(medical);
        return new ResponseEntity<>(medicalService.findById(id), HttpStatus.OK);
    }
}
