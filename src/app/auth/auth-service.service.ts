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
    this.http.post('https://localhost/api/user/signup', {username:userusername, passsword:userpassword})
    .subscribe(response =>{
    });
  }

  login (userusername:string, userpassword: string)
  {
    this.http.post<{token: string}>('https://localhost/api/user/login', {username:userusername, password:userpassword})
    .subscribe(response =>{
      const token = response.token;;
      this.token = token;
    });
  }

  getToken(){
    return this.token;
  }

}

