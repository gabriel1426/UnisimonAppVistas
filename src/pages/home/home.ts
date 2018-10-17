import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Events  } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias
  tipo

  constructor(public navCtrl: NavController,public proveedor:UserServiceProvider, public evento:Events,
    public modalCtrl: ModalController) {
  this.cargarNoticias();
  }
  
  cargarNoticias() {
    this.tipo=this.proveedor.cargartipo()
    this.proveedor.cargarNoticias()
    .subscribe(data => {
      this.noticias=data;
     console.log(data);
      console.log("Bien");
      console.log(this.tipo)
      if (this.tipo==='estudiante'){
        this.evento.publish('user:estudiante');
      }else if (this.tipo==='docente'){
        this.evento.publish('user:docente');
      }else {
        this.evento.publish('user:administrativo');
      }

     }, error => {
      console.log(error);
    });

    

  }
  muestraNoticia(not){
    let modalSitio = this.modalCtrl.create( 'VerNoticiaPage', not );
    modalSitio.present();
 }

  salir(){
    
    if(this.proveedor.logout()){
      this.navCtrl.setRoot (LoginPage); 
      this.navCtrl.popToRoot ();
    }
  }

}
