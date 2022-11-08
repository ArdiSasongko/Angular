import { Component, OnInit } from '@angular/core';
import { itemService } from '../ItemService/item.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private itemService:itemService) { }

  items !: {title:string,power:string,img:string};

  ngOnInit(): void {
    this.itemService.onAdddisplay.subscribe((data:{title:string,power:string,img:string})=>{
      this.items = data;
    })
  }

}
