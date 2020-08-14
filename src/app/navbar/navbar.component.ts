import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslateService } from '@ngx-translate/core'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  home: boolean = false;
  aboutUs: boolean = false;
  portfolio: boolean = false;
  team: boolean = false;
  contactUs: boolean = false;

  constructor(private viewportScroller: ViewportScroller, public translate: TranslateService) {
    translate.addLangs(['en', 'fr'])
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    switch (elementId) {
      case 'homebanner':
        {
          this.home = true;
          this.portfolio = false;
          this.team = false;
          this.aboutUs = false;
          this.contactUs = false;
        }
        break;
      case 'portfolio':
        {
          this.home = false;
          this.portfolio = true;
          this.team = false;
          this.aboutUs = false;
          this.contactUs = false;
        }
        break;
      case 'team':
        {
          this.home = false;
          this.portfolio = false;
          this.team = true;
          this.aboutUs = false;
          this.contactUs = false;
        }
        break;
      case 'aboutUs':
        {
          this.home = false;
          this.portfolio = false;
          this.team = false;
          this.aboutUs = true;
          this.contactUs = false;
        }
        break;
      case 'contactUs':
        {
          this.home = false;
          this.portfolio = false;
          this.team = false;
          this.aboutUs = false;
          this.contactUs = true;
        }
        break;
    }
  }

  ngOnInit(): void {
  }

}
