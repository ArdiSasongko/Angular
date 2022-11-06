import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input('ItemElements') element !: {
    item: string,
    name : string,
    description : string
  };
  
  @Output() deleteDisp = new EventEmitter<{itemList:string,itemName:string,itemDesc:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteDisp.emit({
      itemList:this.element.item,
      itemName:this.element.name,
      itemDesc:this.element.description
    })
  }
}
