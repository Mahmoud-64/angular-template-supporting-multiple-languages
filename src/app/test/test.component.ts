import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../testimonial.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestimonialService]

})
export class TestComponent implements OnInit {

  constructor(private testimonilaService: TestimonialService) { }

  users: any;
  usersData: any;
  firstUser: { first_name: "String", avatar: "String" };
  ngOnInit(): void {
    this.testimonilaService.getAllTestimonials().subscribe(data => {
      this.users = data;
      this.usersData = this.users.data;
      this.firstUser = this.usersData[0];
      console.log(this.users.data);
    });

  }
}
