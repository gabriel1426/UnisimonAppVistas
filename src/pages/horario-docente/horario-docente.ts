import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


/**
 * Generated class for the HorarioDocentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horario-docente',
  templateUrl: 'horario-docente.html',
})
export class HorarioDocentePage {

  horarios
  estudiantes

  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:UserServiceProvider,
    public modalCtrl: ModalController) {
    this.cargarHorarioEstudiante();
  }

  cargarHorarioEstudiante(){
    this.proveedor.cargarHorarioEstudiante().subscribe(
      data => {
        
        this.horarios=data;
        
      });
   
  }


  muestraLista(materia){
    
    this.proveedor.cargarEstudiantes(materia).subscribe(
      data => {
       
          let modalAsistencia = this.modalCtrl.create( 'AsistenciaPage', data);
          modalAsistencia.present();
          
      });

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarioDocentePage');
  }

}
