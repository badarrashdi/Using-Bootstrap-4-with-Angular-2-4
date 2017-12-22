import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination
import { Ng2FilterPipeModule  } from 'ng2-filter-pipe';
import { HttpModule } from '@angular/http';
import { ReportComponent } from './report/report.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule } from '@progress/kendo-angular-grid';
// New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseListObservable  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthenticationService } from './shared/authentication.service';
import { AuthGuard } from './shared/authguard.service';
import { ProductService } from './shared/product.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomepageComponent,data: { title: 'Homepage' } },
  { path: 'about', component: AboutUsComponent,data: { title: 'About us' }},
  { path: 'report', component: ReportComponent,data: { title: 'Reports' }},
  { path: 'contact', component: ContactUsComponent,data: { title: 'Contact us'} },
  {path: 'manageProducts', component: ProductManageComponent, canActivate: [AuthGuard],data: { title: 'Manage Products'} },
];

// const config = {
//   apiKey: "AIzaSyB-jNp-rJ5u5oW9plwizbi-NiRZQ6QjGsw",
//   authDomain: "my-ng2-form.firebaseapp.com",
//   databaseURL: "https://my-ng2-form.firebaseio.com",
//   projectId: "my-ng2-form",
//   storageBucket: "my-ng2-form.appspot.com",
//   messagingSenderId: "800580538359"
// };

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactUsComponent,
    AboutUsComponent,
    AccordionComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ReportComponent,
    SliderComponent,
    ProductManageComponent,
    ProductsTableComponent,
    ProductFormComponent,
  
  ],
  
  imports: [
    BrowserModule,
    Ng2PaginationModule,
    Ng2FilterPipeModule ,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    GridModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    //Http,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, AuthGuard, ProductService],
  bootstrap: [AppComponent]
})

export class AppModule {
 }
