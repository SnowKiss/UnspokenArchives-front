import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface NpcData {
  id: number; // ou string, selon le type de votre id
  firstName: string;
  lastName: string;
  occupation: string;
}

@Injectable({
  providedIn: 'root'
})
export class NpcDataService {

  private apiUrl = 'http://localhost:3000/npcs';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  createNpc(data: NpcData): Observable<NpcData> {
    return this.http.post<NpcData>(this.apiUrl, data);
  }

  getNpc(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getNpcs(): Observable<NpcData[]> {
    return this.http.get<NpcData[]>(this.apiUrl);
  }

}
