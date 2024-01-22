import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLogin = localStorage.getItem('key')

  logOut(){
    localStorage.removeItem('key');
  }
  reload(){
    location.reload();
  }
}
