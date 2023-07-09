import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../domain/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PapeleriaService {

  constructor(private http: HttpClient) { }

  save (producto: Producto): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/productos/registrar', producto)
  }

  getAllClientes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/productos/listar')
  }
}
