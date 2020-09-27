import { Component, OnInit } from '@angular/core';
import { FireUpdateStoreFacade } from './store/store.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private fireUpdateStoreFacade: FireUpdateStoreFacade) {}

  ngOnInit() {
    this.fireUpdateStoreFacade.getRecords();
  }
}
