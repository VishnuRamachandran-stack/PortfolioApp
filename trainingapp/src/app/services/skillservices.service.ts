import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillservicesService {

  _http : HttpClient ;
  postDetails : any  ;
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API endpoint for skill sets


  getPostDetails(){

    this._http.get('https://skillsetwebapp.azurewebsites.net/api/SkillSets').subscribe(result=>{
      this.postDetails = result;
      console.log('Data fetched from API:', this.postDetails);  // Log to verify
    },
    (error) => {
      console.error('Error fetching data', error);
    }
);
}  

addPostDetails(skillData: any): Observable<any> {
  return this._http.post(this.apiUrl, skillData);
}

  constructor(http:HttpClient) {
     this._http = http ;
   }
}
