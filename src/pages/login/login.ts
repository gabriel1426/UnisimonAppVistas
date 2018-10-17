import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../../pages/reset-password/reset-password';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data={usuario:null,clave:null,tipo:null};
  
  
  constructor(public navCtrl: NavController,public navParams: NavParams,public proveedor:UserServiceProvider,
              public alertCrtl:AlertController ) {
    
  }
  saveData(){
    console.log(this.data);
    let alert = this.alertCrtl.create({
      title: 'que mas ve'+this.data,
      subTitle: "hi",
      buttons: ['OK']
    })
    alert.present();
    this.login();
    
  }
  

  login(){
    this.proveedor.login(this.data).subscribe(
    data => {
      console.log(data.respuesta);
      console.log(data.token);
      if(data.respuesta){
        this.proveedor.extractData(data.token,this.data.tipo);
        this.navCtrl.setRoot(HomePage);
      }else{
        this.data.clave = '';
        let alert = this.alertCrtl.create({
          title: 'Datos Invalidos',
          subTitle: "hi",
          buttons: ['OK']
        })
        alert.present();
      }
    })
  }

  
  

  resetPassword(){
    this.saveData();
    this.navCtrl.push(ResetPasswordPage);

  }
  

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

}

  

  
