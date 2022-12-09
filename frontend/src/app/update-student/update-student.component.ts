import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/services/student-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  form!: FormGroup;
  student: any;
  constructor(
    private studentService: StudentServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // this.form = this.formBuilder.group({
    //   id: this.student.id,
    //   name: this.student.name,
    //   houseId: this.student.houseId,
    //   address: this.student.address
    // });
  }

  ngOnInit(): void {
    this.student = this.studentService.student;
    this.form = this.formBuilder.group({
      id: this.student.id,
      name: this.student.name,
      houseId: this.student.houseId,
      address: this.student.address
    });
  }

  updateStudent(e: any) {
    this.studentService.updateStudent(this.form.value).subscribe(data => {
      console.log(data)
    });
    this.router.navigate([`/students`])
  }
}
