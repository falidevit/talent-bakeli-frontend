import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvthequeService {

  //  endpoint = 'http://51.254.98.35:8000/api/';
  endpoint = 'http://127.0.0.1:8000/api/';
  httpOptions = {
    headers: new HttpHeaders({
      method: 'post',
      mode: 'cors',
      'Content-Type': 'application/json',  // sent request
      'Accept': 'application/json',   // expected data sent back,
      'Access-Control-Allow-Origin': '*'
    })
  };

  httpGetOption = {
    headers: new HttpHeaders({
      method: 'GET',
      credentials: 'include',
      cache: 'no-cache',
      mode:'cors'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  onGetCvthequesData(): Observable<any>{
    return this.http.get(this.endpoint + 'cvtheques')
    .pipe(map(this.extractData));
  }
}
