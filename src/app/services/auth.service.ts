import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged = new Subject<boolean>();

  constructor(private httpClient: HttpClient, private routerService: Router) { }

  login(loginData: any){
    return this.httpClient.post("https://apartamentos-back.herokuapp.com/asesores/login",loginData,{headers:{"Content-Type":"application/json"}})
  }

  isLoggedObserver(): Observable<boolean>{
    return this._isLogged.asObservable();
  }

  isLogged(){
    return localStorage.getItem("token")? true:false
  }

  saveLoginToken(token: string){
    localStorage.setItem('token', token)
    this._isLogged.next(this.isLogged());
  }

  logout(){
    localStorage.removeItem("token");
    this._isLogged.next(this.isLogged());
    this.routerService.navigate(['/home'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
