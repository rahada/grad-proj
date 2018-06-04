import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }
	
	PostData(server:object) {
    return this.http.post('https://postingtest-7e2f6.firebaseio.com/data.json', server);
  }
	
	getData(path: string): Observable<any> {
     return this.http.get(path);
  }
	
	getAdmin(path:string) : Observable<any>{
    return this.http.get(path);
  }
	
	courseJson(path: string): Observable<any> {
     return this.http.get(path);
	}//json file course
	
	instructorJson(path: string): Observable<any> {
     return this.http.get(path);
	}//json file course
	
}
