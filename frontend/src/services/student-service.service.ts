import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsComponent } from 'src/app/students/students.component';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  getStudents(houseId?: number): Observable<any> {
    let url = houseId? `http://localhost:3000/getStudents?id=${houseId}` : `http://localhost:3000/getStudents`
    return this.http.get(url);
  }
}
