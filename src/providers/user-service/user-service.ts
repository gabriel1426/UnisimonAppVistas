import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  baseUrl:string = 'http://3c51246e.ngrok.io/';

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  
  login(datos: any ): Observable<any>{
    return this.http.post(this.baseUrl+"v2/login", {codigo:datos.usuario,clave:datos.clave,tipo:datos.tipo}) ;
  }

  cargarperfil(){

    let rol=window.localStorage.getItem('tipo');
    let value =window.localStorage.getItem('token');

    if(rol==="estudiante"){
      console.log(value)
      return this.http.get(this.baseUrl+"v2/perfil",{headers:{'Content-Type':'application/json','Authorization': value}});

    } else if (rol==="docente"){
      console.log(rol+"vas a ver")
      return this.http.get(this.baseUrl+"v3/perfil",{headers:{'Content-Type':'application/json','Authorization': value}});

    }else {

      return this.http.get(this.baseUrl+"v4/perfil",{headers:{'Content-Type':'application/json','Authorization': value}});

    }

  }

  actualizarDatos(perfil:any){

    let rol=window.localStorage.getItem('tipo');
    let value =window.localStorage.getItem('token');

    if(rol==="estudiante"){
      console.log(value)
      return this.http.post(this.baseUrl+"v2/actualizarperfil",perfil,{headers:{'Content-Type':'application/json','Authorization': value}});

    } else if (rol==="docente"){
      console.log(rol+"vas a ver")
      return this.http.post(this.baseUrl+"v2/actualizarperfil",perfil,{headers:{'Content-Type':'application/json','Authorization': value}});

    }else {
      return this.http.post(this.baseUrl+"v2/actualizarperfil",perfil,{headers:{'Content-Type':'application/json','Authorization': value}});
    }
    
  }

  cargarNoticias(): Observable<any>{
    
    return this.http.get(this.baseUrl+"v1/noticia");
  }

  cargartipo(): string{

    return window.localStorage.getItem('tipo');
  }

  cargarNotas(): Observable<any>{
    let value =window.localStorage.getItem('token');
    return this.http.get(this.baseUrl+"v2/notas",{headers:{'Content-Type':'application/json','Authorization': value}});
  }
  cargarHorarioEstudiante(): Observable<any>{
    let value =window.localStorage.getItem('token');
    return this.http.get(this.baseUrl+"v2/horario",{headers:{'Content-Type':'application/json','Authorization': value}});
  }

  cargarEstudiantes(materia: string ){
    console.log(materia);
    let value =window.localStorage.getItem('token');
    return this.http.get(this.baseUrl+"v2/lista/"+materia,{headers:{'Content-Type':'application/json','Authorization': value}});
  }

  isLogged(){
    if(window.localStorage.getItem('token')){
      return true
    }else{
      return false;
    }
  }

  logout(){
    
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('tipo');
    
    return true;
  }

  
  public extractData(token: string,tipo: string){
    
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('tipo', tipo);
      
      
  }


}
