import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';
/* import { catchError } from 'rxjs/operators'; */


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string = "https://restcountries.eu/rest/v2"

  constructor(private http: HttpClient) { }
  
  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  buscarPais(termino: string) : Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params : this.httpParams}).pipe( tap(console.log));
    /*  */
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params : this.httpParams}).pipe( tap(console.log));
  }
  
  getPaisPorAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegiones( region: string) : Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params : this.httpParams}).pipe( tap(console.log));
  }



}
