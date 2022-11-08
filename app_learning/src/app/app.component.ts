import { Component } from '@angular/core';
import { itemService } from './ItemService/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [itemService]
})
export class AppComponent {
  title = 'app_learning';

  constructor(private itemService : itemService){

  }
}
