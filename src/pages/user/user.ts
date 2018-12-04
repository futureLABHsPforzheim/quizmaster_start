import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from './../../providers/http/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomePage } from './../../pages/home/home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  username: String;
  uid: number;
  constructor(private alertCtrl: AlertController, public http: Http, public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  presentAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Name already in use',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  getName() {
    this.httpProvider.getUserId(this.username).subscribe(response => {
      console.log("getUserId response: ", response);
      console.log("getUserId response json: ", response.json());
      console.log("getUserId response json uid: ", response.json()["uid"]);
      console.log("positive userid get");
        this.uid = response.json()["uid"];
        this.navCtrl.push(HomePage, {uid: this.uid});
    }, error =>{
      this.presentAlert(error);
    });
  }
}
