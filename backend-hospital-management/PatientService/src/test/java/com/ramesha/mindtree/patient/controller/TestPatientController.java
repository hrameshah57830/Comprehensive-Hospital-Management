package com.ramesha.mindtree.patient.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ramesha.mindtree.patient.entity.Patient;
import com.ramesha.mindtree.patient.exception.CustomException;
import com.ramesha.mindtree.patient.repository.PatientRepository;

@SpringBootTest
public class TestPatientController {

	@Autowired
    PatientController pControl;
     
    @Autowired
    PatientRepository pRepo;
    
    @Test
    void testList()
    {
    	assertThat(pControl.listPatient().size()).isGreaterThan(0);
    }
    
    @Test
    void testAdd()
    {
    	Patient p1=null;
		try {
			p1 = new Patient(4L,"Ajith",34,3L,new SimpleDateFormat("yyyy-MM-dd").parse("2022-10-20"),"CT SYXSXkHA");
		} catch (ParseException e) {
			e.printStackTrace();
		}
    	pControl.add(p1);
    	
    	assertEquals("Mahesha",pRepo.byName("Mahesha").getName());
    }
    
    @Test
    void testSearchById() throws CustomException
   {
    	assertThat(pControl.searchById(16L).size()).isGreaterThan(0);
    }
    
    @Test
    void testListPatient()
    {
    	assertThat(pControl.listPatient().size()).isGreaterThan(0);
    }
    
    void testNumberOfPatientOfDoctor()
    {
    	assertThat(pControl.numberOfPatientInDoctor(3L)).isGreaterThan(0);
    }
}