import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcComponent } from './pc/pc.component';
import { AddPcComponent } from './add-pc/add-pc.component';
import { FormsModule } from '@angular/forms';
import { UpdatePcComponent } from './update-pc/update-pc.component';

@NgModule({
  declarations: [
    AppComponent,
    PcComponent,
    AddPcComponent,
    UpdatePcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
