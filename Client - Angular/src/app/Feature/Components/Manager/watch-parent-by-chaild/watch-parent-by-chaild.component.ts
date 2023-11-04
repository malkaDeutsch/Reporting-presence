import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChaildService } from 'src/app/Core/chaild.service';
import { KindergardenDTO } from 'src/app/Models/Kindergarden';
import { ParentDTO } from 'src/app/Models/Parent';

@Component({
  selector: 'app-watch-parent-by-chaild',
  templateUrl: './watch-parent-by-chaild.component.html',
  styleUrls: ['./watch-parent-by-chaild.component.css']
})
export class WatchParentByChaildComponent implements OnInit {
  parentList:ParentDTO[]=[];
  KG:KindergardenDTO={address:'',areaId:-1,corporationtId:-1,email:'',kind:'',kindergardenId:-1,layerId:-1,password:'',phone:''};

  constructor(private chaildService:ChaildService,private route:ActivatedRoute) { 

  }
parentID:number=-1;
kindergardenID:number=-1;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.parentID = params['parent_id'];
      this.kindergardenID = params['KG_id'];
  });
    this.chaildService.GetParentByChaild(this.parentID).subscribe((result:ParentDTO[]) => {
      this.parentList=result;
  });
  this.chaildService.GetKG_ByChaild(this.kindergardenID).subscribe((result:KindergardenDTO) => {
    this.KG=result;})
}

}
