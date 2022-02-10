import { Component, OnInit } from '@angular/core';
import { ApartamentosService } from 'src/app/services/apartamentos.service';
import { CommonModule } from '@angular/common';
import { Apartamento } from 'src/app/models/apartamento.model';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  apartamentos: Apartamento[] = [];
  apartamento: Apartamento = {
    canon:0,
    ubicacion: "",
    dir: ""
  }

  constructor(private apartamentosService: ApartamentosService) { }

  ngOnInit(): void {
      this.apartamentosService.listAllApartamentos().subscribe((response)=>{
        console.log(response)
        this.apartamentos = response as Apartamento[]
      })
  }

}
