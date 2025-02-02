import { Component, OnInit, Pipe } from '@angular/core';
import { GithubService } from '../service/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  
})
export class ExternoComponent implements OnInit {
  public user: any = null; // Almacena los datos del usuario
  public userId: string = ''; // ID del usuario ingresado
  public isLoading: boolean = false; // Indicador de carga
  public fecha: any; 

  constructor(private _peticionesService: GithubService) {}

  ngOnInit() {
    this.fecha = new Date();
    console.log('Componente Externo inicializado');
  }

}