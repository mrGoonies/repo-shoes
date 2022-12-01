import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  imageLogo: string = 'https://img.freepik.com/premium-vector/illustration-pair-sneaker_289678-26.jpg?w=2000'


  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHome = () => {
    this.router.navigate(['/home'])
  }

  navigateToSignUp = () => {
    this.router.navigate(['/sign-up'])
  }



}
