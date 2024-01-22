import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  }

  loginObj: any = {
    userName: '',
    password: '',
  }
  constructor() { }

  ngOnInit(): void{
    const localDada = localStorage.getItem('Users')
      if(localDada != null) {
        this.signupUsers = JSON.parse(localDada);
      }
  }

  onSignUp(){
    if(this.signupObj.userName === '' || this.signupObj.email === '' || this.signupObj.password === '')
      alert('Nu ati completat corect');
    else
    {
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('Users', JSON.stringify(this.signupUsers));
      this.signupObj = {
        userName: '',
        email: '',
        password: '',
      }
      alert('Contul a fost inregistrat cu succes!')
    }
  }

  onLogin(){
    const UserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password)
    if(UserExist != undefined)
    {
      localStorage.setItem('key', JSON.stringify(UserExist.userName));
      alert('Bun venit ' + UserExist.userName + '!')
      window.location.href = 'home'
    }
    else
    {
      alert('Parola sau user incorect')
    }
  }

  reload() {
    location.reload();
  }
}
