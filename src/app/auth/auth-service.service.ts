import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public token!: string;

  constructor(private http: HttpClient) { }

  signup (userusername:string, userpassword: string)
  {
    this.http.post('https://localhost:3000/api/user/signup', {username:userusername, passsword:userpassword})
    .subscribe(response =>{
    });
  }

  login (username:string, password: string)
  {
    this.http.post<{token: string}>('https://localhost:3000/api/user/login', {username:username, password:password})
    .subscribe(response =>{
      const token = response.token;;
      this.token = token;
    });
  }

  getToken(){
    return this.token;
  }

}

