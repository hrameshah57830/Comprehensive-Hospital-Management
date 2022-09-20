package com.ramesha.mindtree.doctor;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ramesha.mindtree.doctor.controller.DoctorController;
import com.ramesha.mindtree.doctor.entity.Doctor;
import com.ramesha.mindtree.doctor.exception.CustomException;
import com.ramesha.mindtree.doctor.repository.DoctorRepository;

@SpringBootTest
class DoctorServiceApplicationTests {

	@Autowired
    private DoctorRepository dRepo;
	
	@Autowired
	DoctorController dControl;
	
	@Test
	void testAdd() {
		Doctor dc = new Doctor(4L,"Dr Demo Demo",34,"Male","Surgen");
		Doctor addDc = dControl.add(dc);
		assertEquals(dRepo.ByName("dr Demo Demo").getName(),addDc.getName());
	}
	@Test
	void testList() throws CustomException
	{
		assertEquals(dRepo.findAll().size(),dControl.list().size());
	}
}