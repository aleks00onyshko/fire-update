import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireUpdateStoreFacade } from '../../store/store.facade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(public fireUpdateStoreFacade: FireUpdateStoreFacade, private router: Router) {}

  ngOnInit(): void {}

  public sidebarItemWasSelected(name: string): void {
    this.router.navigate([`/${name}`]);
  }
}
