import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';


const baseURL ="http://localhost:8090/producto"

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  consultaPC3(filtro:string): Observable<Producto[]>{
    return this.http.get<Producto[]>(baseURL+"/listaProductoPorNombreLike/"+filtro);
  }
  elimnar(id:any): Observable<any>{
    return this.http.delete<any>(baseURL+"/eliminarProductoPorId/"+ id);
  }  

  registra(aux:Producto): Observable<any>{
    return this.http.post<any>(baseURL+"/registraProducto",aux);
  }
  actualiza(aux:Producto): Observable<any>{
    return this.http.put<any>(baseURL+"/actualizaProducto",aux);
  }   

}
