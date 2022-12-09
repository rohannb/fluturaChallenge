import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/services/student-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private studentService: StudentServiceService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: ``,
      houseId: ``,
      address: ``
    });
  }

  ngOnInit(): void {
  }

  registerStudent(e: any) {
    this.studentService.registerStudent(this.form.value).subscribe(data=>{
      console.log(data)
    });
  }
}
