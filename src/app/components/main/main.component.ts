import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => console.log(data));
  }
}
