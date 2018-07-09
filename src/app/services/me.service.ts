import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Portfolio} from '../model/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }


  getPortfolio(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(`${this.apiUrl}/portfolio.json`);
  }
}
