import { Component, OnInit } from '@angular/core';

import {Hero} from "/models/hero";


@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent  {
  heroes: Hero[] = [];

}

