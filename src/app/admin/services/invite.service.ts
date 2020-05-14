import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InviteService{

  constructor(private http: HttpClient) {}

  inviteUsers(userDetails: Array<object>,surId){
    let reciepients: Array<object>=[];
    userDetails.forEach((user) => {
      reciepients.push({
        userId: user['_id'],
        email: user['email']
      })
    })
    return this.http.post('http://localhost:8080/survey/to-invite/' + surId ,reciepients);
  }
}

