import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';



/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil;
  tipo;
  datos:any
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:UserServiceProvider,
    public modalCtrl: ModalController) {
    this.cargarperfil();
   
  }

  
  cargarperfil() {
    this.proveedor.cargarperfil().subscribe(
      data => {
        console.log(data);
        this.perfil=data;
        this.datos={codigo:this.perfil.codigo
          ,emailpersonal:this.perfil.emailpersonal,telefono:this.perfil.telefono,direccion:this.perfil.direccion,clave:this.perfil.clave}
      });
    this.tipo=this.proveedor.cargartipo();
    console.log(this.tipo);
  }

  muestraSitio(){
    let  profileModal = this.modalCtrl.create( 'ActualizarPerfilPage', this.perfil );
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
    
 }

  
  
  }


