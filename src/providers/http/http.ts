import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class HttpProvider {

  //Server IP
  webservice: any = "http://ec2-52-212-125-177.eu-west-1.compute.amazonaws.com";
  status:any;
  statusText:any;
  token:any;

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  //send Answer
  //Post
  proof(userId, questionId, answerId) {
      //try to look at the other methods to  complete this one
    }

    //Get User Id
    getUserId(username) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.webservice+"/userid/"+username, options);
  }

    //Get Scores
    //id:
    getScores() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.webservice+"/score", options);
  }

    //Get Question
    //id:.....
    getQuestion(uid) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.webservice+"/question/"+uid, options);
  }

    //Get Answer
    //id:.... asnwers comes back
    getAnswer(userId,questionId) {
      console.log("getAnswer in httpProvider", questionId);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.webservice+"/answer/"+userId+"/"+questionId, options);
  }
}
