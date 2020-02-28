import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SerialTestComponent } from '../components/serial-test/serial-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      { path: 'components/serial-test', component: SerialTestComponent }
    ])
  ],
  declarations: [HomePage, SerialTestComponent]
})
export class HomePageModule {}
