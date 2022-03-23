import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaDeProdutosPageRoutingModule } from './entrada-de-produtos-routing.module';

import { EntradaDeProdutosPage } from './entrada-de-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaDeProdutosPageRoutingModule
  ],
  declarations: [EntradaDeProdutosPage]
})
export class EntradaDeProdutosPageModule {}
