import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
