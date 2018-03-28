import { ILocation } from "selenium-webdriver";

export interface ILocationSuggestion{
    location_suggestions:ILocation[];
    status:string;
    has_more:number;
    has_total:number;
}