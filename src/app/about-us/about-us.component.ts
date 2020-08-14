import { Component, OnInit } from '@angular/core';
import { faChartBar, faShoppingBag, faImage, faLanguage } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  faCharBar = faChartBar;
  faShoppingBag = faShoppingBag;
  faImage = faImage;
  constructor() { }

  ngOnInit(): void {
  }

}
