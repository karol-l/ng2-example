import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({ selector: '[cShow]' })
export class CustomShowDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {       
  }
    
  @Input() set cShow(condition: boolean) {
    if (condition)
      this.viewContainer.createEmbeddedView(this.templateRef);
    else
      this.viewContainer.clear(); 
  }
}
