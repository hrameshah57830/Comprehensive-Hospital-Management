import { TestBed } from '@angular/core/testing';
import { Patient } from './patient';
import { of } from 'rxjs';

import { PatientService } from './patient.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientService', () => {
  let service: PatientService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientService);

    httpClientSpy = jasmine.createSpyObj('HttpClient',['get','post']);
    service = new PatientService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit("list of patient",()=>
  {
    let patients:Patient[] = [
      {
        "id":1,
        "age":23,
        "name":"Ajith",
        "dataOfVist": new Date("2022-10-10"),
        "visitedDoctor":"Dr Ramesha",
        "prescription": "SCVSHCHC"
      },
      {
        "id":2,
        "age":24,
        "name":"Mahesha",
        "dataOfVist": new Date("2022-11-10"),
        "visitedDoctor":"Keerthana",
        "prescription": "VSDHCBJS"
      }
    ]
    httpClientSpy.get.and.returnValue(of(patients))
    service.listPatient().subscribe({
      next:(res)=>
      {
        expect(res).toEqual(patients);
      }
    })
  });

  fit("Add Patient",()=>
  {
    let patients:Patient = 
      {
        "id":1,
        "age":23,
        "name":"Ajith",
        "dataOfVist": new Date("2022-10-10"),
        "visitedDoctor":"Dr Ramesha",
        "prescription": "SCVSHCHC"
      }
    
    httpClientSpy.post.and.returnValue(of(patients))
    service.addPatient(patients).subscribe({
      next:(res)=>
      {
        expect(res).toEqual(patients);
      }
    })
  });
});