import {Component, OnInit} from '@angular/core';
import {LocationService} from '../locations/locations.service';
import {ILocation} from '../locations/location';
import {ILocationSuggestion} from '../locations/location-suggestions';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  statusRes: string;
  locations: ILocation[];
  errorMessage: string;
  location: ILocation;
  locationSuggestions: ILocationSuggestion;
   inputLocation:string;
  
  constructor(private _locationService: LocationService) {console.log(_locationService)}

  

  ngOnInit() {
    console.log("ngOnInit executing ...");

    /*console.log(this._locationService.getLocations().subscribe((location)=>this.locationSuggestion=<ILocationSuggestion>location,
    (error)=>this.errorMessage=<any> error));*/
    //this._locationService.getLocations().subscribe(locationSuggestions => this.locations =  locationSuggestions['location_suggestions']);
      
  }
  searchHotelsByLocation(){
    console.log("Searching location is:" +this.inputLocation);
    this._locationService.getLocations(this.inputLocation).subscribe(params => {
      this.locations = params['location_suggestions'],
      this.statusRes = params['status'];
    });

  }

}
