import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { WikipediaService } from './WikipediaService';
import { LayoutService } from '../../services/LayoutService';
import { NavigationBarComponent } from '../../components/NavigationBarComponent';


@Component({
  selector: 'demo-wiki',
  template: `
    <div>
      <h1>Wikipedia Demo</h1>
      <p><i>Fetches after each keystroke</i></p>
      <input #term (keyup)="search(term.value)"/>
      <ul>
        <li *ngFor="let item of items | async">{{item}}</li>
      </ul>
    </div>
  `,
  providers: [JSONP_PROVIDERS, WikipediaService],
})
export class WikiComponent {
  
  private searchTermStream = new Subject<string>();

  
  items: Observable<string[]> = this.searchTermStream
                                      .debounceTime(300)
                                      .distinctUntilChanged()
                                      .switchMap((term: string) => this.wikipediaService.search(term) );  
  
  
  constructor (private wikipediaService: WikipediaService, private layout:LayoutService) {
  }
  
  search(term: string) {
    this.searchTermStream.next(term); 
  }
}