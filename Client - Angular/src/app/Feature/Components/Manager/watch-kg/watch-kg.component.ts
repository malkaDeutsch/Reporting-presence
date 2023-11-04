import { Component, OnInit } from '@angular/core';
import { KindergardenDTO } from 'src/app/Models/Kindergarden';

@Component({
  selector: 'app-watch-kg',
  templateUrl: './watch-kg.component.html',
  styleUrls: ['./watch-kg.component.css']
})
export class WatchKGComponent implements OnInit {
  KG_list:KindergardenDTO[]=[];

  constructor() { }

  ngOnInit(): void {

  }

}
