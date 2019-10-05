import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { OpcionesComponent } from '../opciones/opciones.component';
import { ModalIngresoComponent } from '../modal-ingreso/modal-ingreso.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  avances = [];

  constructor(private router: Router, public popoverController: PopoverController, public modalController: ModalController) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.avances = [{
      id: '001',
      tipo: 'Estructural',
      fecha: '09/09/2019',
      descripcion: 'Se desarrollo la estructura del segundo piso',
      porcentaje: '90%',
      persona: 'Ernesto Cano',
    },
    {
      id: '002',
      tipo: 'Acabado',
      fecha: '06/09/2019',
      descripcion: 'Urbanismos',
      porcentaje: '10%',
      persona: 'Daniel Herrera',
    }
    ];
    console.log(this.avances);

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OpcionesComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalIngresoComponent,
      componentProps: {
        id: 'hello',
        tipo: 'world',
        fecha: 'world',
        descripcion: 'world',
        porcentaje: 'world',
        persona: 'world'
      }
    });
    return await modal.present();
  }
}
