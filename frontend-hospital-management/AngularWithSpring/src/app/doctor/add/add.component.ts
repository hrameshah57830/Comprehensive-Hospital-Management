import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Doctor } from 'src/app/service/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private docService:DoctorService,private fb:FormBuilder,private router:Router,private activatedRoute:ActivatedRoute) { }
  getDoctor!:Doctor;
 
  doctorForm!:FormGroup;

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      "name": [null,[Validators.required,Validators.pattern('^[a-zA-Z ]*')]],
      "age": [null,[Validators.required,Validators.pattern('^[0-9]*')]],
      "gender":[null,[Validators.required]],
      "specialist":[null,[Validators.required]]
    });

  
    
  }
 

  get name()
  {
    return this.doctorForm.get('name');
  }
  get age()
  {
    return this.doctorForm.get("age");
  }
  get gender()
  {
    return this.doctorForm.get("gender");
  }
  get specialist()
  {
    return this.doctorForm.get("specialist");
  }

  addDoctor()
  {
    this.docService.addDoctor(this.doctorForm.value).subscribe({
      next:(result)=>
      {
        alert(result.name+" Record Added Successfully");
        this.doctorForm.reset();
      },
      error:(err)=> {
          alert(err.error.message)
          this.router.navigate(['/doctor/list']);
      },
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errors="";
    if (error.status === 0) {
      errors= error.error;
    } else {
      errors= error.error;
    }
    return throwError(() => new Error(errors));
  }
}