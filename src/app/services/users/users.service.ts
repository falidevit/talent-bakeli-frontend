import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

  // doRegisterRecruiter(user): Observable<any> {
  //   console.log(user);
  //   return this.http.post<any>(this.endpoint + 'register-recruiter-user', JSON.stringify(user), this.httpOptions).pipe(
  //     tap((user) => 'success'),
  //     catchError(this.handleError<any>('doRegisterRecruiter'))
  //   );
  // }

  doRegisterRecruiter(user){
    return this.http.post(this.endpoint + 'register-recruiter-user', user);   
  }

  doLoginRecruiter(user){
    return this.http.post(this.endpoint + 'user/login', user);   
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // return of(result as T);
      return error;
    };
  }
}
