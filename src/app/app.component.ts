import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loginValue = {
    username : '',
    password : '',
    ltype : ''
  }
  title = 'login';
  username: any;
  password: any;
  showSpinner: any;
  obj: any;

  login() {
    console.log(this.loginValue);

  }
}


