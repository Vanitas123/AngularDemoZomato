import {Component} from '@angular/core'
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
 selector:'hotel-details',
 templateUrl:'./hoteldetails.component.html'
})

export class HotelDetailsComponent{

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ){}
}