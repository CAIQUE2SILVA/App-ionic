import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpAcesso } from './ip';
import { Observable } from 'rxjs';

@Injectable()
export class IpService{

  protected urlservidceV1 = 'http://localhost:3000/';

  constructor(private http: HttpClient){}

  obterAcesso(): Observable<IpAcesso[]>{
    return this.http
    .get<IpAcesso[]>(this.urlservidceV1 + 'ipacesso');
  }
}
