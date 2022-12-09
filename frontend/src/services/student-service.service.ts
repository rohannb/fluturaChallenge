import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsComponent } from 'src/app/students/students.component';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  student: any;

  constructor(private http: HttpClient) { }

  getStudents(houseId?: number): Observable<any> {
    let url = houseId? `http://localhost:3000/getStudents?id=${houseId}` : `http://localhost:3000/getStudents`
    return this.http.get(url);
  }

  getHouses(id?: number): Observable<any> {
    let url = id? `http://localhost:3000/getHouses?id=${id}` : `http://localhost:3000/getHouses`
    return this.http.get(url);
  }

  registerStudent(body: {}): Observable<any> {
    let url = `http://localhost:3000/registerStudent`;
    return this.http.post(url, body);
  }

  setUpdateStudent(data: any) {
    this.student = data;
  }

  updateStudent(body: any): Observable<any> {
    let url = `http://localhost:3000/updateStudent?id=${body.id}`;
    return this.http.put(url, body);
  }

  registerHouse(body: {}): Observable<any> {
    let url = `http://localhost:3000/registerHouse`;
    return this.http.post(url, body);
  }

  addStudentsToHouse(houseId: number, studentList: []): Observable<any> {
    let url = `http://localhost:3000/addStudentsToHouse?houseId=${houseId}`;
    return this.http.post(url, studentList);
  }
}
