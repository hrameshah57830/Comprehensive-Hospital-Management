package com.ramesha.mindtree.doctor.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ramesha.mindtree.doctor.VO.DoctorWithPatient;
import com.ramesha.mindtree.doctor.entity.Doctor;
import com.ramesha.mindtree.doctor.exception.CustomException;

@Service
public interface DoctorService {

	Doctor add(Doctor doc);
	List<Doctor> list();
	DoctorWithPatient getById(long id) throws CustomException;
	Doctor update(Doctor doc,long id) throws CustomException;
	Doctor delete(long id) throws CustomException;
	List<Doctor> getByName(String name);
	String getName(long id);
}