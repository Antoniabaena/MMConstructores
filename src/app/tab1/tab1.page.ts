import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  proyectos = [];

  constructor(private router: Router) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.proyectos = [{
      id: '1',
      nombre: 'Cielo alto',
      estado: 'Activo',
      ubicacion: 'Cra 3 sur # 43b - 13',
      fechaInicio: '20/08/2018',
      fechaFin: '30/12/2020',
      imagen: './assets/icon/cieloAlto.png',
    },
    {
      id: '2',
      nombre: 'Castillo blanco',
      estado: 'Activo',
      ubicacion: 'Cra 10 # 7 - 56',
      fechaInicio: '20/08/2018',
      fechaFin: '30/12/2020',
      imagen: './assets/icon/castilloBlanco.jpeg',
    }
    ];
    console.log(this.proyectos);

  }

  avancesProyecto() {
    this.router.navigate(['tabs/tab2']);
  }

}
