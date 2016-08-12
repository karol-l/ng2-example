import { Component, OnInit, ViewChild, ViewContainerRef, ComponentResolver, Injector, ComponentFactory, EventEmitter } from '@angular/core';
import { HighlightDemoComponent } from './HighlightDemoComponent'
import { EmptyDemoComponent } from './EmptyDemoComponent'


let componetsMapping:Object = {
  HighlightDemoComponent,
  EmptyDemoComponent
};



@Component({
  selector: 'dynamic-pages',
  template: `
    <div class="buttonsBlock" style="padding: 20px;">
      <a class="btn btn-default" href="javascript:void(0)" (click)="onPageChange('HighlightDemoComponent')">HighlightDemo</a>
      <a class="btn btn-default" href="javascript:void(0)" (click)="onPageChange('EmptyDemoComponent')">EmptyDemo</a>
    </div>
    <div class="contentBlock" style="padding: 20px;">
      <div #content></div>
    </div>
  `
})
export class DynamicPagesComponent implements OnInit {
  

  @ViewChild('content', { read: ViewContainerRef }) content:ViewContainerRef;

  
  constructor(private cResolver: ComponentResolver, private injector:Injector) {
  }


  ngOnInit() {
    this.onPageChange('HighlightDemoComponent');
  }


  onPageChange(name:string) {
    if (componetsMapping.hasOwnProperty(name)) {
        this.content.clear(); 
        this.cResolver.resolveComponent(componetsMapping[name]).then((factory) => this.createComponent(factory));      
    }
  }
  
  
  createComponent(factory:ComponentFactory<any>) {
      let componentRef = this.content.createComponent(factory, null, this.injector);
      componentRef.changeDetectorRef.detectChanges();
      componentRef.onDestroy(()=> {
          componentRef.changeDetectorRef.detach();
      })
  }
  

}