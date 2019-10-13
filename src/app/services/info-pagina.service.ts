import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  info: InfoPagina= {};
  equipo: any[] = [];
  cargada = false;
  constructor(private http: HttpClient) {    
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //Leer archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.info = resp;
        this.cargada = true;
        //console.log(resp);
      });
  }

  private cargarEquipo() {
    //Leer archivo json
    this.http.get('https://angular-html-804f8.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        
        this.equipo = resp;
        //console.log(this.equipo);
      });
  }




}
