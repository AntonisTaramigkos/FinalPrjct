import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Define properties to control form positions
  formPosition = '0%';
  loginMarginLeft = '0%';
  registerMarginLeft = '50%';

  switchForm(form: string): void {
    if (form === 'register') {
      this.formPosition = window.innerWidth > 800 ? '50%' : '0%';
      this.loginMarginLeft = '-150%';
      this.registerMarginLeft = '-100%';
    } else {
      this.formPosition = window.innerWidth > 800 ? '0%' : '0%';
      this.loginMarginLeft = '0%';
      this.registerMarginLeft = '50%';
    }
  }
}
