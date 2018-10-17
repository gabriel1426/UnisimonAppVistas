import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the HorarioEstudiantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horario-estudiante',
  templateUrl: 'horario-estudiante.html',
})
export class HorarioEstudiantePage {

  horarios
  lunes=true
  martes=false
  miercoles=false
  jueves=false
  viernes=false

  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:UserServiceProvider) {
  this.cargarHorarioEstudiante();
  }


  cargarHorarioEstudiante(){
    this.proveedor.cargarHorarioEstudiante().subscribe(
      data => {
        
        this.horarios=data;
        console.log(this.horarios);
      });
   
  }
   
ionViewDidLoad() {
  console.log('ionViewDidLoad HorarioEstudiantePage');
}

}
