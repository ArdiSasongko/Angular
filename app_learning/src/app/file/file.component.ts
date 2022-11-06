import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  newItemlist = '';
  newItemName = '';
  newItemDesc = '';

  @Output() dispAdded = new EventEmitter<{itemList:string,itemName:string,itemDesc:string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onDispAdded(){
    this.dispAdded.emit({
      itemList: this.newItemlist,
      itemName: this.newItemName,
      itemDesc: this.newItemDesc
    })
  }
}
