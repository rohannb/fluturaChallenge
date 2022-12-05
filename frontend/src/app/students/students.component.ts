import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { StudentServiceService } from 'src/services/student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private studentService: StudentServiceService) { }
  students!: any;

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
      console.log(this.students);
    });
  }
}
