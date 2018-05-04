import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
    url: string = "http://18.62.20.88:3000/team";
    team: string = "1";
    constructor(private http: Http) { }

    public getLastTime() {
        return this.http.get(this.url + this.team)
    }

    public updateLastTime() {
        return this.http.post(this.url + this.team, "")
    }
}