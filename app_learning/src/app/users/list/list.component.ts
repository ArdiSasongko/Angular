import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() user:any;
  constructor(private Routes:Router,
    private userService:UserServiceService) { }
  ngOnInit(): void {
  }

}
