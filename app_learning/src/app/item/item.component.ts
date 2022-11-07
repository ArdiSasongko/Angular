import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  //newItemlist = '';
  newItemName = '';
  newItemDesc = '';

  @Output() dispAdded = new EventEmitter<{itemList:string,itemName:string,itemDesc:string}>();
  constructor() { }

  @ViewChild('judulInput') judulInput !: ElementRef;

  ngOnInit(): void {
  }

  onDispAdded(nameInput: HTMLInputElement){
    this.dispAdded.emit({
      itemList: nameInput.value,
      itemName: this.judulInput.nativeElement.value,
      itemDesc: this.newItemDesc
    })
  }

}
