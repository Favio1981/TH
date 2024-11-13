import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SectoresService {

 // private apiUrl = 'http://10.66.119.91:8000/api/TallerSector/sectores'; // URL de tu API en Laravel
 private apiUrl = 'http://10.66.119.91:8000/api';

  constructor(private http: HttpClient) { }


  getSectores(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/TallerSector/sectores`);
   // return this.http.get<any>(this.apiUrl);
  }




  addSector(newSector: { nombre: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/TallerSector/sector`, newSector);
  }
  updateSector(id: number, updatedSector: any) {
    return this.http.put(`${this.apiUrl}/TallerSector/sectores/${id}`, updatedSector);
  }

  deleteSector(id: number) {
    return this.http.delete(`${this.apiUrl}/TallerSector/sectores/${id}`);
  }


}
