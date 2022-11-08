import { Component, OnInit } from '@angular/core';
import { itemService } from '../ItemService/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemService:itemService) { }

  items : {title:string,power:string,img:string}[] = [];

  ngOnInit(): void {
    this.items = this.itemService.item
  }

  detail(items : {title:string,power:string,img:string}){
    this.itemService.detail(items);
  }
}
