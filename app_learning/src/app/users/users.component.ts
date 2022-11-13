import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:any;

  constructor(
    private Routes : Router,
    private userService : UserServiceService
    ) { }

  ngOnInit(): void {
    this.user = this.userService.users
  }

  form(){
    this.Routes.navigate(['form'])
  }
}
