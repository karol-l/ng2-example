import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[cHighlight]'
})
export class CustomHighlightDirective {
    
  private _defaultColor = 'red';
  private el: HTMLElement;
  
  constructor(elem: ElementRef) {
      this.el = elem.nativeElement;
  }
  
  @Input() set defaultColor(colorName: string) { this._defaultColor = colorName || this._defaultColor; }
  

  @Input('cHighlight') highlightColor: string;
  

  @HostListener('mouseenter') onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }
  

  @HostListener('mouseleave') onMouseLeave() { this.highlight(null); }
  
  
  private highlight(color: string) {    this.el.style.backgroundColor = color;   }
}