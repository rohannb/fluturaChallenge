import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/services/student-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.css']
})
export class RegisterHouseComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private studentService: StudentServiceService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: ``
    });
  }

  ngOnInit(): void {
  }

  registerHouse(e: any) {
    this.studentService.registerHouse(this.form.value).subscribe(data=>{
      console.log(data)
    });
  }
}
