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
import { FormCategoriaComponent } from './Forms/form-categoria/form-categoria.component'

const routes: Route[] = [
  {path:"",component:HomeComponent},
  {path:"productos",component:HomeComponent},
  {path:"productosEdit",component:FormComponent},
  {path:"productosEdit/:producto_id",component:FormComponent},
  {path:"categorias",component:HomeCategoriaComponent},
  {path:"categoriasEdit",component:FormCategoriaComponent},
  {path:"categoriasEdit/:categoria_id",component:FormCategoriaComponent}
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
    FormCategoriaComponent
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
