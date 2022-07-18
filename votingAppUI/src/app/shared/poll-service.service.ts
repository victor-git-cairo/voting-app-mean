import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }


getPolls() {
  return this.http.get<any>('http://localhost:3000/api/polls');      
}

addAPoll(post: any) {
  // create a const to store data
  // post the data
}

// https://jasonwatmore.com/post/2019/09/06/angular-http-get-request-examples


// getPolls() {
//   this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
//       this.totalAngularPackages = data.total;
//   })        
// }




}