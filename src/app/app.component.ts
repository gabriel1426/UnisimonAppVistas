import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events ,ToastController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { PerfilPage } from '../pages/perfil/perfil';
import { HorarioEstudiantePage } from '../pages/horario-estudiante/horario-estudiante';
import { HorarioDocentePage } from '../pages/horario-docente/horario-docente';
import { NotasPage } from '../pages/notas/notas';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,public toastCtrl: ToastController,
               statusBar: StatusBar, splashScreen: SplashScreen,public evento:Events) {

     

    // used for an example of ngFor and navigation
    evento.subscribe('user:estudiante',()=>{
      this.pages = [
        { title: 'Home', component: HomePage},
        { title: 'Login', component: LoginPage },
        { title: 'Perfil', component: PerfilPage },
        { title: 'Horario', component: HorarioEstudiantePage },
        { title: 'Notas', component: NotasPage }
      ];
    });
      
      evento.subscribe('user:docente',()=>{
        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'Login', component: LoginPage },
          { title: 'Perfil', component: PerfilPage },
          { title: 'Horario', component: HorarioDocentePage },
          
        ];
      });
      evento.subscribe('user:administrativo',()=>{
        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'Login', component: LoginPage },
          { title: 'Perfil', component: PerfilPage },
          
        ];
      });
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     
      try{
        statusBar.styleDefault();
        splashScreen.hide();
        
      } catch (error) {
       
      }
    });

    
  }

  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    
  }
}

