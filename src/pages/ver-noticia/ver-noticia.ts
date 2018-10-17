import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';


/**
 * Generated class for the VerNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-noticia',
  templateUrl: 'ver-noticia.html',
})
export class VerNoticiaPage {

  noticias:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController) {
    this.noticias = this.navParams.data;
    console.log(this.noticias);
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerNoticiaPage');
  }

}
