import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ReportService {

  constructor(
    private http: Http
  ) { }

  getReport() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map((res:Response) => res.json());
  }

}





