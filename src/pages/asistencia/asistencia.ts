import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the AsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistencia',
  templateUrl: 'asistencia.html',
})
export class AsistenciaPage {

  
  asistencias :any[]
  estudiantes=[]
  materia
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:UserServiceProvider
    , private viewCtrl : ViewController) {
    this.asistencias= this.navParams.data;
    
    
  }

  modificar(codigo,materia){

    this.materia=materia;

    if (this.estudiantes!=null){
      for(var i=0; i<this.estudiantes.length; i++){
       
        if (this.estudiantes[i]===codigo){
           this.estudiantes.splice(i, 1);
           
           return;
        }
      }
    }

    this.estudiantes.push(codigo);

  }

  enviar(){

    console.log(this.materia)
    console.log(this.estudiantes)
    this.cerrarModal();

  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
  }

}
