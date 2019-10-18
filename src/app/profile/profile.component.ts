import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditable = false;
  name: any;
  email: any;
  password: any;
  private profile;

  constructor(private service: HttpService) {
  }

  ngOnInit() {
    this.service.getProfile().subscribe((data) => {
      this.profile = data;
      this.name = this.profile.name;
      this.email = this.profile.email;
      this.password = this.profile.password;
    });
  }

  edit() {
    this.isEditable = true;
  }

  update() {
    this.service.updateProfile({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe((data) => {
      this.profile = data;
      this.isEditable = false;
      window.alert('Profile Updated');
    });
  }
}
