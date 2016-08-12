import { Component, OnInit, ViewChild, ViewContainerRef, ComponentResolver, Injector, ComponentFactory, EventEmitter } from '@angular/core';
import { LayoutService } from './services/LayoutService';


@Component({
  selector: 'ng2-app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  

  constructor(private layout:LayoutService) {
  }


  ngOnInit() {
  }

}

