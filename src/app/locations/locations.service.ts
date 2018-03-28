import {Injectable} from '@angular/core';
import {Http,Response, RequestOptions, RequestOptionsArgs,URLSearchParams} from '@angular/http';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ILocation } from './location';
import { ILocationSuggestion } from './location-suggestions';



@Injectable()
export class LocationService {

    private locationUrl ="https://developers.zomato.com/api/v2.1/locations";
    //private locationUrl ="assets/locationsuggestions.json";
    
    constructor(private httpClient: HttpClient){}

    //curl -X GET --header "Accept: application/json" --header "user-key: ee200521622fbb8d0e31d883ddc697bf" "https://developers.zomato.com/api/v2.1/locations?query=Wakad"
    locationsRes:ILocation[];
    getLocations():Observable <ILocationSuggestion> {

        let headers = new HttpHeaders();
        headers  = headers.append('Accept', 'application/json');
        headers  = headers.append('user-key', 'ee200521622fbb8d0e31d883ddc697bf');

        let params = new HttpParams();
        params = params.append('query', 'Wakad');

        //return resp.map((respo:Response)=><ILocation[]> respo["location_suggestions"].json());

        return this.httpClient.get(this.locationUrl, {headers , params })
                              .map((response:Response)=><ILocationSuggestion> response)
                              .catch(this.handleError);
        
        /*return this.httpClient.get(this.locationUrl, {headers , params }) .map(res => res.json());*/
    
        
        /*return this.httpClient.get<ILocation[]>(this.locationUrl, {headers , params }); */                                   
    }

    private handleError(error:Response){
        return Observable.throw( "Server error");
    }
}