import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPoll } from '../shared/poll.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

getPolls() {
  return this.http.get<any>('http://localhost:3000/api/polls')
  .pipe(catchError(this.handleError<any>('getPolls',[])))   
}

addAPoll(newPoll: IPoll):Observable<any> {
  // create a const to store data
  // post the data
  let options = { headers: new HttpHeaders({'content-type': 'application/json'})}  
  return this.http.post<IPoll>('http://localhost:3000/api/polls', newPoll, options )
  .pipe(catchError(this.handleError<any>('getPolls',[])))  
}


private handleError<T> ( operation = 'operation', result? : T) {
  return ( error: any): Observable<T> => {
    console.error(error);
     return of (result as T)
  }
}
// https://jasonwatmore.com/post/2019/09/06/angular-http-get-request-examples


// getPolls() {
//   this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
//       this.totalAngularPackages = data.total;
//   })        
// }




}