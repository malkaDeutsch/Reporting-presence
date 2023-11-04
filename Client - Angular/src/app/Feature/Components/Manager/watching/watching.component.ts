import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.css']
})
export class WatchingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  watchChailds(){
    this.router.navigate(['/WatchChaild']);
  }
  watch_KG(){
    this.router.navigate(['/WatchKG']);

  }
}
