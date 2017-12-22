import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [AngularFireDatabase]
})
export class ContactUsComponent implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  todos$: FirebaseListObservable<any[]>;
  constructor(
    public afAuth: AngularFireAuth, 
    public afDb: AngularFireDatabase,
    private af: AngularFireDatabase
  
  ) { 

    this.user = afAuth.authState;
    this.items = afDb.list('items');
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
    this.afAuth.auth.signOut();
    }
  ngOnInit() {
    this.todos$ = this.af.list('/todos');
    this.todos$ = this.af.list('/todos', {
      query: {
        limitToFirst: 3
      }
    });
  }
  

}
