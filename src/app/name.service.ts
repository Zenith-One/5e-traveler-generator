import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

const urlTemplate = "https://cors-anywhere.herokuapp.com/https://donjon.bin.sh/name/rpc.cgi?type=#SETTINGS#&n=10"

@Injectable()
export class NameService {

  constructor(private http: HttpClient) { }

  getNames(race: string, sex?: string){
    let settings = sex ? race + '+' + sex : race;
    let url = urlTemplate.replace('#SETTINGS#',settings);
    return this.http.get(url, {responseType: 'text'}).toPromise()
      .then((resp)=>{
        return resp.split('\n').map(item  => item.split(' ')[0]);
      });
  }

}
