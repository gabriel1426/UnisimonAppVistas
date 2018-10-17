import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorarioDocentePage } from './horario-docente';

@NgModule({
  declarations: [
    HorarioDocentePage,
  ],
  imports: [
    IonicPageModule.forChild(HorarioDocentePage),
  ],
})
export class HorarioDocentePageModule {}
