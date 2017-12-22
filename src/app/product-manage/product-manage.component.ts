import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(
    public afAuth: AngularFireAuth, 
    public afDb: AngularFireDatabase,
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
    this.afAuth.auth.signOut();
    }
  selectedProduct: Product;
  addBool: boolean;

  getSelectedProduct(event) {
    this.selectedProduct = event;
  }

  addOrUpdate(event) {
    this.addBool = event;
  }
}
