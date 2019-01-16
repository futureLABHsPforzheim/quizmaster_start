import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from './../../providers/http/http';
import { Team } from './../../model/team';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {NgZone} from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  a1: string = "answer Nr.1";
  a2: string = "answer Nr.2";
  a3: string = "answer Nr.3";

  points: number = 0;

  userId: number;
  qReady: boolean = false;
  foundRegions: any[] = [];
  questionId: number;
  qText: string = "Die ";
  data = {
    answer0: { "found": false, "checked": false, "aid": 0 },
    answer1: { "found": false, "checked": false, "aid": 1 },
    answer2: { "found": false, "checked": false, "aid": 2 }
  };
  regions = [
    //Todo Task1:
    //Here you need to add the beacons
  ]
  constructor(private zone:NgZone, private alertCtrl: AlertController, public navParams: NavParams, public http: Http, public navCtrl: NavController, public httpProvider: HttpProvider) {
    this.userId = this.navParams.get("uid");

    ////////////////////////////////////////////////////////////////
    //test server without Beacons
    /*
    this.getQuestion();
    setTimeout(() => {
      console.log('Timeout');
      this.getAnswer();
    }, 5000);

    setTimeout(() => {
      console.log('Timeout');
      this.getAnswer();
    }, 5000);

    setTimeout(() => {
      console.log('Timeout');
      this.getAnswer();
    }, 5000);
    */
    ///////////////////////////////////////////////////////////////

    //Todo Task1:
    // create a new delegate and register it with the native layer

    //Todo Task1;
    // Subscribe to some of the delegate's event handlers

  }

  //start the monitoring for all regions
  startMonitoringForAllRegions() {
    //Todo Task1:
  }

  //Some alerts
  presentErrorAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentSuccessAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  handleBeaconDiscovered(region) {
    this.zone.run(()=>{
    //Todo Task1:
    // 1st found beacon

    // 2nd - 4th found beacon
    });
  }

  //Set ion Input to read-only
  isReadonly() {
    return true;
  }

  //Todo Task1:
  //Get an answer from the webservice by calling the http provider
  getAnswer() {

  }

  //Todo Task1:
  //Get the question from the webservice by calling the http provider
  getQuestion() {

  }

  //makes sure there is always just one answer selected
  update() {
    if (this.data.answer0.checked == true) {
      this.data.answer1.checked = false;
      this.data.answer2.checked = false;
    } else if (this.data.answer1.checked == true) {
      this.data.answer0.checked = false;
      this.data.answer2.checked = false;
    } else if (this.data.answer2.checked == true) {
      this.data.answer0.checked = false;
      this.data.answer1.checked = false;
    }
  }

  //Todo Task1:
  proofResult() {
    for (var answer in this.data) {

        // only check those answers via http provider, that have been spotted and are expected to be true.
        // then reset the questeion and answer, set the score and restart the process of searching a new question and so on
    }
  }

  //Set dcores method
  setScore(points) {
    this.points = this.points + points;
  }

  //reset the question
  resetQuestion() {
    this.qReady = false;
  }

  //If you have time try to create a Highscore list for a players and make it available
  showHighscore() {
  //navigate to the new created page
  }

  //method to reset the answers
  resetAnswers() {
    for (var answer in this.data) {
      this.data[answer].found = false;
      this.data[answer].checked = false;
    }
  }
}
