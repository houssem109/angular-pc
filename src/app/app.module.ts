import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcComponent } from './pc/pc.component';
import { AddPcComponent } from './add-pc/add-pc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePcComponent } from './update-pc/update-pc.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';

import { RechercheParModelComponent } from './recherche-par-model/recherche-par-model.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeMarqueComponent } from './liste-marque/liste-marque.component';
import { HTTP_INTERCEPTORS, HttpClientModule, } from '@angular/common/http';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { TokenInterceptor } from './service/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PcComponent,
    AddPcComponent,
    UpdatePcComponent,
    RechercheParMarqueComponent,
    RechercheParModelComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent,
    ListeMarqueComponent,
    UpdateMarqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
