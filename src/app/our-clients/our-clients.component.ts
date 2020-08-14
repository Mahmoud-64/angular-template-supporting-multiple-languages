import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent implements OnInit {

  images = ['1', '2', '3', '4', '5', '6', '7', '8']

  constructor() { }
  ngOnInit(): void {
  }

}
