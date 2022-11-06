import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  testtex:string = 'tes file';
  constructor() { }

  ngOnInit(): void {
  }

}
