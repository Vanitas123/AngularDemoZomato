import { ILocation } from "./location";
import { Serializer } from '@angular/compiler';

export interface ILocationSuggestion {
    location_suggestions : ILocation[];
    status:string;
    has_more:string;
    has_total:string;
    
}