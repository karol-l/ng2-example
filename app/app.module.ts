import { Routes, RouterModule }   from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { JSONP_PROVIDERS }  from '@angular/http';

import './rxjs-operators';


import { AuthGuard } from './services/authGuards/AuthGuard';
import { AuthService } from './services/AuthService';
import { LayoutService } from './services/LayoutService';
import { UsersService } from './services/UsersService';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/NavigationBarComponent';
import { LayoutComponent } from './components/LayoutComponent';


import { LoginComponent } from './pages/login/LoginComponent';
import { NotFoundComponent } from './pages/notFound/NotFoundComponent';
import { WikiComponent } from './pages/wiki/WikiComponent';
import { UsersListComponent } from './pages/users/UsersListComponent';


import { CustomHighlightDirective } from './pages/dynamicPages/CustomHighlightDirective';
import { CustomShowDirective } from './pages/dynamicPages/CustomShowDirective';
import { EmptyDemoComponent } from './pages/dynamicPages/EmptyDemoComponent';
import { HighlightDemoComponent } from './pages/dynamicPages/HighlightDemoComponent';
import { DynamicPagesComponent } from './pages/dynamicPages/DynamicPagesComponent';



const allRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },    
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'wiki',  component: WikiComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersListComponent },
      { path: 'dynamicPages', component: DynamicPagesComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(allRoutes)
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    NotFoundComponent,
    UsersListComponent,
    WikiComponent,
    CustomHighlightDirective, CustomShowDirective, EmptyDemoComponent, HighlightDemoComponent, DynamicPagesComponent
  ],
  providers: [
    AuthGuard,    
    AuthService,
    LayoutService,
    UsersService,
    JSONP_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
}