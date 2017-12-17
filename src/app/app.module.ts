import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomepageComponent,data: { title: 'Angular 4 using Bootstrap 4' } },
  { path: 'about', component: AboutUsComponent,data: { title: 'Angular 4 using Bootstrap 4: About us' }},
  { path: 'contact', component: ContactUsComponent,data: { title: 'Angular 4 using Bootstrap 4: Contact us'} }
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactUsComponent,
    AboutUsComponent,
    AccordionComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    Ng2PaginationModule,
    Ng2FilterPipeModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
