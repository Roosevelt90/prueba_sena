import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from '../../../environments/environment';

@Injectable()
export class GeneralService {
    options: any;
    routeBaseApi: string = ENV.BASE_URL;
    constructor(private http: HttpClient) {
        this.options = {
            headers: {
                Accept: 'application/json',
                contentType: 'application/json'
            }
        };
    }

    login(data: any): Observable<any> {
        const ruta = this.routeBaseApi + 'login';
        return this.http.post(ruta, JSON.stringify(data), this.options.headers);
    }
}
