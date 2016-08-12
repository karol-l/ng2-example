import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute  } from '@angular/router';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { LayoutService } from '../services/LayoutService';
import { ArrayHelper } from '../utils/Utils';

@Component({
  selector: 'page-layout',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid"> 
        <div class="navbar-header"> 
          <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false"> 
            <span class="sr-only">Toggle navigation</span> 
            <span class="icon-bar"></span> 
            <span class="icon-bar"></span> 
            <span class="icon-bar"></span> 
          </button> 
          <a href="#" class="navbar-brand">NG2 - Example</a> 
        </div> 
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9"> 
          <ul class="nav navbar-nav">
            <li *ngFor="let item of pagesLinks" [class.active]="item.active">
              <a [routerLink]="item.link" routerLinkActive="active" href="javascript:void(0)">{{item.name}}</a>
            </li>
          </ul> 
        </div> 
      </div>	
    </nav>
    <div class="layout-content">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})
export class LayoutComponent {

  pagesLinks:Array<any>;
  lastSelected:any;

  constructor (private layout:LayoutService, private router: Router) {

    this.pagesLinks = [ 
      this.getPageLink('/wiki','Wiki'), 
      this.getPageLink('/users','Użytkownikcy'),
      this.getPageLink('/dynamicPages','Dynamic Pages')
    ]
  }

  ngOnInit() {
    /*
    var selected = ArrayHelper.findByProperty(this.pagesLinks, "link", this.router.url);
    if (selected != null)
        selected.active = true;
    */
  }

  private getPageLink(link, name) {
    let item = { link, name, active:false };
    return  item;
  }

}