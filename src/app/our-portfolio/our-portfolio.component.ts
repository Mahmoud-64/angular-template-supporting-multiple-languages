import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faEye, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.css']
})
export class OurPortfolioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigateByUrl("/");
  }

  all: Boolean = true;
  app: Boolean = false;
  web: Boolean = false;
  card: Boolean = false;

  setAll = () => {
    this.all = true
    this.app = false;
    this.web = false;
    this.card = false;
  }

  setApp = () => {
    this.all = false;
    this.app = true;
    this.web = false;
    this.card = false;
  }

  setWeb = () => {
    this.all = false;
    this.app = false;
    this.web = true;
    this.card = false;
  }

  setCard = () => {
    this.all = false;
    this.app = false;
    this.web = false;
    this.card = true;
  }
  faEye = faEye;
  faExternalLinkAlt = faExternalLinkAlt;
}
