import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  cargarProductos() {
    this.http.get('https://angular-html-804f8.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.cargando = false;
        this.productos = resp;
      });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-804f8.firebaseio.com/productos/${id}.json`)
  }
}
