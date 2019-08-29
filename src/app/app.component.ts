import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  username: any;
  password: any;
  showSpinner: any;

  login(username: string, password: string) {
    alert(username + '-' + password);
    console.log('User Name ' + username);
    console.log('Passwrd ' + password);
  }
}


