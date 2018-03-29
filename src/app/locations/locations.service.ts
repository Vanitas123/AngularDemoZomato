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

    
    //private locationUrl ="assets/locationsuggestions.json";
    private baseApiUrl ="https://developers.zomato.com/api/v2.1";
    constructor(private httpClient: HttpClient){}

    locationsRes:ILocation[];
    getLocations(inputLoc:string):Observable <ILocationSuggestion> {
      let locationUrl =this.baseApiUrl+"/locations";

        let headers = new HttpHeaders();
        headers  = headers.append('Accept', 'application/json');
        headers  = headers.append('user-key', 'ee200521622fbb8d0e31d883ddc697bf');

        let params = new HttpParams();
        params = params.append('query', inputLoc);

        return this.httpClient.get(locationUrl, {headers , params })
                              .map((response:Response)=><ILocationSuggestion> response)
                              .catch(this.handleError);
    }

    private handleError(error:Response){
        return Observable.throw( "Server error");
    }
}