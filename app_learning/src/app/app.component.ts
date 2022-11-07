import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_learning';

  itemElement = [{item:"Pertama",name:"Buku Tulis",description:"Buku untuk menulis"}]

  onDispAdded(dispData:{itemList:string,itemName:string,itemDesc:string}){
    this.itemElement.push({
      item : dispData.itemList,
      name : dispData.itemName,
      description : dispData.itemDesc
    })
  }

  onDelete(dispData:{itemList:string,itemName:string,itemDesc:string}){
    this.itemElement.splice(this.itemElement.findIndex(item => {return item.item === dispData.itemList}),1)
  }
}
