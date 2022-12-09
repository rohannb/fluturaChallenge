import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/services/student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(
    private studentService: StudentServiceService,
    private router: Router
    ) { }
  students!: any;
  houses!: any;

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
    this.studentService.getHouses().subscribe(data => {
      this.houses = data;
    });
  }

  updateStudent(data: any) {
    this.studentService.setUpdateStudent(data)
    this.router.navigate([`/updateStudent`])
  }
}
