import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  imageAnimated: string = 'https://i.gifer.com/origin/4b/4b2621bc867e995e5509e540d5f5cad0.gif'

  constructor(private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  navigateToLogin =  () => {
    this.router.navigate(['/login'])
  }

   async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Creating User...',
      duration: 2000,
      cssClass: 'custom-loading',
    });

    loading.present();
  }


}
