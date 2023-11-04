import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChaildService } from 'src/app/Core/chaild.service';
import { CityService } from 'src/app/Core/city.service';
import { CorporationService } from 'src/app/Core/corporation.service';
import { KindergardenService } from 'src/app/Core/kindergarden.service';
import { ChildDTO } from 'src/app/Models/Child';
import { CityDTO } from 'src/app/Models/City';
import { CorporationDTO } from 'src/app/Models/Corporation';
import { KindergardenDTO } from 'src/app/Models/Kindergarden';
import { ParentDTO } from 'src/app/Models/Parent';

@Component({
  selector: 'app-watch-chaild',
  templateUrl: './watch-chaild.component.html',
  styleUrls: ['./watch-chaild.component.css']
})
export class WatchChaildComponent implements OnInit {
  selectedValue='';
  constructor(private chaildService:ChaildService,private router:Router,private kindergardenService:KindergardenService
    ,private corporationService:CorporationService,private cityService:CityService) { }

  childList:ChildDTO[]=[];
  KG_List:KindergardenDTO[]=[];
  corporationList:CorporationDTO[]=[];
 city_List:CityDTO[]=[];
corporationId=1;
  ngOnInit(): void {
  //   this.chaildService.GetChildList().subscribe((result:ChildDTO[]) => {
  //     debugger
  //     this.childList=result;
  // })

this.corporationService.Get_cities_List(this.corporationId).subscribe((result:CorporationDTO[]) => {
  this.corporationList=result;
})
}

city(corporationId:number){ 
  this.cityService.Get_cities_by_corporation_list(corporationId).subscribe((result:CityDTO[]) => {
  this.city_List=result;
  console.log(this.city_List[0].cityName);

})
}
Viewdetails(parentID:number,kindergardenID:number){
  // this.chaildService.GetParentByChaild(parentID);
  this.router.navigate(['/WatchParentByChaild'],{queryParams:{parent_id:parentID,KG_id:kindergardenID}}); 
}
}