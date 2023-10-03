import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrarFacturaComponent } from './registrar-factura/registrar-factura.component';
import { AprobacionFacComponent } from './aprobacion-fac/aprobacion-fac.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, UsuariosComponent, RegistrarFacturaComponent, AprobacionFacComponent, FormularioUsuariosComponent, ListadoUsuariosComponent]
})
export class LayoutModule {}
