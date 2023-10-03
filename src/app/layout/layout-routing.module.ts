import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrarFacturaComponent } from './registrar-factura/registrar-factura.component';
import { AprobacionFacComponent } from './aprobacion-fac/aprobacion-fac.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },            
            //{ path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },            
            { path: 'usuarios', component: UsuariosComponent},
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'registro-factura', component: RegistrarFacturaComponent},
            { path: 'aprobacion-factura', component: AprobacionFacComponent },
            { path: 'formulario-usuarios', component: FormularioUsuariosComponent },
            { path: 'listado-usuarios', component: ListadoUsuariosComponent }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
