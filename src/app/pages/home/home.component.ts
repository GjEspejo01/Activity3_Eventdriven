import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentNav: string = '';
  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  navClick(current:string) {
    this.currentNav = current;
  }
}
