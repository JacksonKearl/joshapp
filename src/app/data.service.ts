import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
    ip: string = "10.0.0.80:3000";
    team: string = "1"; 
    constructor(private http: Http) { }

    public getLastTime() {
        return this.http.get(this.getURL())
    }

    public updateLastTime() {
        return this.http.post(this.getURL(), "")
    }

    public getURL() {
        return `http://${this.ip}/team${this.team}`;
    } 
}