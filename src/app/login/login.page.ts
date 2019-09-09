import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  registerCredentials = { user: '', pass: '' };
  errorAuth = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['tabs/tab1']);
  }


}
