import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { LayoutService } from '../services/LayoutService';


@Component({
  selector: 'navigation-bar',
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
            <li class="active"><a href="#">Page0</a></li> 
            <li><a href="#">Page1</a></li> 
            <li><a href="#">Page2</a></li> 
            <li><a href="#">Page3</a></li> 
            <li><a href="#">Page4</a></li> 
            <li><a href="#">Page5</a></li> 
          </ul> 
        </div> 
      </div>	
    </nav>
  `
})
export class NavigationBarComponent {

  constructor (private layout:LayoutService) {
  }

}