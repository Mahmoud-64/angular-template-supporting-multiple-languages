import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient) { }
  public getAllTestimonials() {
    return this.http.get('https://reqres.in/api/users?page=1');
  }
}
