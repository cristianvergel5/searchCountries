import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  /*  signo de admiracion para que lo trate como si no fuera nulo */
  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {


    /* resumen */

    this.activatedRoute.params
    .pipe( 
      switchMap( ({ id }) =>  this.paisService.getPaisPorAlpha( id ) ) , tap( console.log)
      )
      
      .subscribe( pais => this.pais = pais);


        /* forma no optima */
 /*    this.activatedRoute.params.subscribe( ({id}) => {
      console.log(id);

      this.paisService.getPaisPorAlpha(id).subscribe( pais => {
        console.log( pais);
      })
    }) */
    

  }

}
