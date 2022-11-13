import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user:any
  userId:any
  constructor(
    private userService:UserServiceService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.users.find(data => data.id == this.userId)
  }

}
