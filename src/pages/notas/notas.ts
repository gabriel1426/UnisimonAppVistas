import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {

  notas

  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:UserServiceProvider) {
  this.cargarNotas();
  
  }

  cargarNotas(){
    this.proveedor.cargarNotas().subscribe(
      data => {
        console.log(data+"asdsadgsa");
        this.notas=data;
      });
  }

}
