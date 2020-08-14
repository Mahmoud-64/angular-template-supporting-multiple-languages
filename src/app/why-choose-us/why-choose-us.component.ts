import { Component, OnInit } from '@angular/core';
import { faLanguage, faGem, faObjectGroup } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit {
  faLanguage = faLanguage;
  faGem = faGem;
  faObjectGroup = faObjectGroup;
  constructor() { }

  ngOnInit(): void {
  }
}
