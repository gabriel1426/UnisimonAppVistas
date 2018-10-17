import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorarioEstudiantePage } from './horario-estudiante';

@NgModule({
  declarations: [
    HorarioEstudiantePage,
  ],
  imports: [
    IonicPageModule.forChild(HorarioEstudiantePage),
  ],
})
export class HorarioEstudiantePageModule {}
