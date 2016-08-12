import { Component, ElementRef, HostListener, Input } from '@angular/core';


@Component({
    selector: 'highlight-demo',
    template: `
        <div>
            <h1 [cHighlight]="color" defaultColor="red">{{title}}</h1>
            <h4>Pick a highlight color</h4>
            <h4>Current time: {{time | formatter:timeFormat}}</h4>
            <div>
                <input type="radio" name="colors" (click)="color='lightgreen'">Green
                <input type="radio" name="colors" (click)="color='yellow'">Yellow
                <input type="radio" name="colors" (click)="color='cyan'">Cyan
            </div>     
            <br />
            <h4>Template test...</h4>
            <div *cShow="testCondition">
                aaaa bbbb cccc dddd eeee
            </div>
        </div>    
    `
})
export class HighlightDemoComponent  {
    
    
    title = `Demo component`;
  
    time:Date = new Date();
    
    timeFormat:string = "DateTime"; ///type == 'Date' || type == 'ShortTime' || type == 'Time' || type == 'DateTime'
    
    refreshIntervalId:any;
    
    color:string;
    
    testCondition:boolean = false;
    
    
    constructor() {
    }

    
    ngOnInit() {
        this.refreshIntervalId = setInterval(() => { this.time = new Date(); }, 1000);
    }
    

    ngOnDestroy() {
        clearInterval(this.refreshIntervalId);
    }
    
    
    ngDoCheck() {
        
        let tmp = this.timeFormat;
        
        if (this.color == 'lightgreen')
            this.timeFormat = 'Date';
        else if (this.color == 'yellow')
            this.timeFormat = 'Time';            
        else
            this.timeFormat = 'ShortTime';
            
        if (tmp != this.timeFormat)
            this.testCondition = !this.testCondition;
    }

}