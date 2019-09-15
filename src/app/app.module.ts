import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Entidad/home/home.component';
import { FormComponent } from './Forms/form/form.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CabezeraComponent } from './cabezeras/cabezera/cabezera.component';
import { CabezeraProductoComponent } from './cabezeras/cabezera-producto/cabezera-producto.component';
import { CabezeraCategoriaComponent } from './cabezeras/cabezera-categoria/cabezera-categoria.component';
import { HomeCategoriaComponent } from './Entidad/home-categoria/home-categoria.component';
import { FormCategoriaComponent } from './Forms/form-categoria/form-categoria.component';
import { CabezeraEstadoComponent } from './cabezeras/cabezera-estado/cabezera-estado.component';
import { HomeEstadoComponent } from './Entidad/home-estado/home-estado.component';
import { FormEstadoComponent } from './Forms/form-estado/form-estado.component';
import { HomeNoticiaComponent } from './Entidad/home-noticia/home-noticia.component';
import { FormNoticiaComponent } from './Forms/form-noticia/form-noticia.component';
import { CabezeraNoticiaComponent } from './cabezeras/cabezera-noticia/cabezera-noticia.component';
import { CabezeraEventoComponent } from './cabezeras/cabezera-evento/cabezera-evento.component';
import { FormEventoComponent } from './Forms/form-evento/form-evento.component'
import { HomeEventoComponent } from './Entidad/home-evento/home-evento.component';
import { CabezeraPedidoComponent } from './cabezeras/cabezera-pedido/cabezera-pedido.component';
import { HomePedidoComponent } from './Entidad/home-pedido/home-pedido.component';
import { FormPedidoComponent } from './Forms/form-pedido/form-pedido.component';

const routes: Route[] = [
  {path:"",component:HomeComponent},
  {path:"productos",component:HomeComponent},
  {path:"productosEdit",component:FormComponent},
  {path:"productosEdit/:producto_id",component:FormComponent},

  {path:"categorias",component:HomeCategoriaComponent},
  {path:"categoriasEdit",component:FormCategoriaComponent},
  {path:"categoriasEdit/:categoria_id",component:FormCategoriaComponent},

  {path:"estados",component:HomeEstadoComponent},
  {path:"estadosEdit",component:FormEstadoComponent},
  {path:"estadosEdit/:estado_id",component:FormEstadoComponent},

  {path:"noticias",component:HomeNoticiaComponent},
  {path:"noticiasEdit",component:FormNoticiaComponent},
  {path:"noticiasEdit/:noticia_id",component:FormNoticiaComponent},

  {path:"eventos",component:HomeEventoComponent},
  {path:"eventosEdit",component:FormEventoComponent},
  {path:"eventosEdit/:evento_id",component:FormEventoComponent},
  
  {path:"pedidos",component:HomePedidoComponent},
  {path:"pedidosEdit",component:FormPedidoComponent},
  {path:"pedidosEdit/:evento_id",component:FormPedidoComponent} 
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CabezeraComponent,
    CabezeraProductoComponent,
    CabezeraCategoriaComponent,
    HomeCategoriaComponent,
    FormCategoriaComponent,
    CabezeraEstadoComponent,
    HomeEstadoComponent,
    FormEstadoComponent,
    HomeNoticiaComponent,
    FormNoticiaComponent,
    CabezeraNoticiaComponent,
    CabezeraEventoComponent,
    HomeEventoComponent,
    FormEventoComponent,
    CabezeraPedidoComponent,
    HomePedidoComponent,
    FormPedidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
