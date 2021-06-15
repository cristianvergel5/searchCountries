import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {    
        /* cuando no haya nada en la ruta se va a este componente */
        /* ruta principal */
        path: '', component: PorPaisComponent,
        /* si no hay ninguna url cae en el paht principal que es una ruta vacia*/
        pathMatch: 'full'
    },
    {
        path:'region', component: PorRegionComponent
    },
    {
        path: 'capital', component: PorCapitalComponent
    }, 
    {
        path: 'pais/:id', component: VerPaisComponent
    },
    {
        /* cuando igresa una ruta invalida */
        path: '**', redirectTo: ''
    }
];

@NgModule({
    imports:[
        /* forRoot para rutas pruncipales, forChild para rutas hijas */
        /* aca se usan las rutas */
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ],
})

export class AppRoutingModule {

}