import { Component, OnInit, ViewChild, ViewContainerRef, ComponentResolver, Injector, ComponentFactory, EventEmitter } from '@angular/core';
import { LayoutService } from '../../services/LayoutService';


@Component({
  moduleId: module.id,
  selector: 'not-found-page', 
  templateUrl: 'NotFoundComponent.html',
  styleUrls: [ 'NotFoundComponent.css' ]
})
export class NotFoundComponent implements OnInit {
  

  constructor(private layout:LayoutService) {
  }


  ngOnInit() {
  }


  


}

