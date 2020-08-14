import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OurPortfolioComponent } from './our-portfolio/our-portfolio.component';
import { TestComponent } from './test/test.component';
import { TeamComponent } from './team/team.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    OurPortfolioComponent,
    TestComponent,
    TeamComponent,
    OurClientsComponent,
    ContactUsComponent,
    FooterComponent,
    WhyChooseUsComponent,
    AboutUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
