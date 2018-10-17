import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


/**
 * Generated class for the ActualizarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualizar-perfil',
  templateUrl: 'actualizar-perfil.html',
})
export class ActualizarPerfilPage {

  perfil:any
  datos:any
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController
    ,public proveedor:UserServiceProvider,public toastCtrl: ToastController) {
    this.perfil = this.navParams.data;
    this.datos={codigo:this.perfil.codigo
      ,emailpersonal:this.perfil.emailpersonal,telefono:this.perfil.telefono,direccion:this.perfil.direccion,clave:this.perfil.clave}
  }

  cerrarModal(){
    this.viewCtrl.dismiss(this.datos);
  }

  guardarDatos(){

      this.proveedor.actualizarDatos(this.datos).subscribe(
        data => {
         if (data){

          const toast = this.toastCtrl.create({
            message: 'Datos actualizados con exito porfavor refresca la pagina',
            duration: 2000
          });
          toast.present();
          this.cerrarModal();

         }else {

          const toast = this.toastCtrl.create({
            message: 'Ocurrio un error',
            duration: 2000
          });
          toast.present();
         }
         
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualizarPerfilPage');
  }

 

}
