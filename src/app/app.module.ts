import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './portfolio/project/project.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent,
    ProjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}
