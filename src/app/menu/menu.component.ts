import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }
  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'impressoras',
      buttons:[{
        text: 'Impressora 1',
      },
      {
        text: 'Impressora 2',
      },
      {
        text: 'Impressora 3',
      },
    ],
      cssClass: 'custom-css',
      animated:true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'ios'

    });

    actionSheet.present();
  }

  ngOnInit() {}

}
