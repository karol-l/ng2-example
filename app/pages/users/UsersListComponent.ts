import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { LayoutService } from '../../services/LayoutService';
import { UsersService } from '../../services/UsersService';
import { NavigationBarComponent } from '../../components/NavigationBarComponent';
import { User } from '../../dataModel/User';
import { FormatterPipe } from '../../pipes/FormatterPipe';


@Component({
  selector: 'users-list',
  template: `
    <div>
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>E-mail</th>
            <th>Modify time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of usersList">
            <th>{{user.id}}</th>
            <th>{{user.name}}</th>
            <th>{{user.email}}</th>
            <th>{{user.modifyTime | formatter:'DateTime'}}</th>
            <th>
              <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Edycja <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="javascript:void(0)" (click)="edit(user)">Edytuj</a></li>
                  <li><a href="javascript:void(0)" (click)="delete(user)">Usuń</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="javascript:void(0)" (click)="addNew()">Utwórz nowy</a></li>
                </ul>
              </div>
            </th>
          </tr>
        </tbody> 
      </table>      
    </div>
  `,
  providers: [JSONP_PROVIDERS],
  directives: [NavigationBarComponent],
  pipes: [FormatterPipe]
})
export class UsersListComponent {
  
  usersList:User[] = null;

  constructor (private usersService:UsersService) {
  }

  ngOnInit() {
    this.usersService.loadUsers().then(users => {
      this.usersList = users;
    })
  }

  edit(user:User) {
  }

  delete(user:User) {
  }

  addNew() {
  }

}