import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApartamentosService {

  constructor(private authService: AuthService, private httpClient: HttpClient) { 
  }

  listAllApartamentos(){
    return this.httpClient.get("http://localhost:3000/apartamentos/",{headers: {"Authorization": `Bearer ${this.authService.getToken()}`}});
  }

  createApartamento(apartamento: any){
    return this.httpClient.post("http://localhost:3000/apartamentos/",apartamento,{headers:{"Content-Type":"application/json"}})
  }

}
