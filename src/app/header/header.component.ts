import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: Observable<firebase.User>;

  toggleClass = true;
  onClickbtn() {
    this.toggleClass = !this.toggleClass;
  }
  constructor(
    public afAuth: AngularFireAuth, 
    public afDb: AngularFireDatabase,
    private af: AngularFireDatabase
  ) { 
    this.user = afAuth.authState;
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
    this.afAuth.auth.signOut();
    }
  ngOnInit() {
  }

}
