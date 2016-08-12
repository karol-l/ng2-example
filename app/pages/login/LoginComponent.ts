import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentResolver, Injector, ComponentFactory, EventEmitter } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { LayoutService } from '../../services/LayoutService';


@Component({
  moduleId: module.id,
  selector: 'login-page', 
  templateUrl: 'LoginComponent.html',
  styleUrls: ['LoginComponent.css']
})
export class LoginComponent implements OnInit {
  

  public message:string = null;


  constructor(private authService: AuthService, private layout:LayoutService, private router: Router) {
  }


  ngOnInit() {
  }


  onLogin(login:string, password:string, rememberUser:boolean) {

    if (login == "" || password == "")
      return;

    this.layout.showLoading();

    let url = this.authService.redirectUrl;
    if (url == null || url.length < 1)
        url = "/wiki";

    this.authService.login(login, password, rememberUser).then(result => {

        this.layout.hideLoading();

        if (result == null) {
          this.message = "Wprowadź poprawny login oraz hasło:";
          return ;
        }

        this.message = null;
        this.router.navigate([url]);
        
    });
  }


}

