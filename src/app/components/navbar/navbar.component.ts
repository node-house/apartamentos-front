import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges, OnDestroy {

  title = "NodeHouse";
  isLogged = false;
  subscription: Subscription = new Subscription();
  
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.title == "NodeHouse" ? this.title = "Nuevo titulo" : this.title = "NodeHouse"
    },2000);
    this.subscription = this.authService.isLoggedObserver().subscribe((isLogged)=>{
      console.log("Cambió estado");
      this.isLogged = isLogged;
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  ngOnChanges(): void{
    console.log("Cambios")
  }

  logout(){
    this.authService.logout();
  }

}
