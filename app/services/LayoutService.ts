import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class LayoutService {

    public isNavbarVisible:boolean = true;
    public isLoading:boolean = false;

    showHavbar() {
        this.isNavbarVisible = true;
    }

    hideNavbar() {
        this.isNavbarVisible = false;
    }

    showLoading() {
        this.isLoading = true;
    }

    hideLoading() {
        this.isLoading = false;
    } 
}