import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MosaicCcComponent } from './mosaic-cc/mosaic-cc.component';
import { GridNovedadesComponent } from './grid-novedades/grid-novedades.component';
import { CarouselPromosComponent } from './carousel-promos/carousel-promos.component';
import { CarouselEventosComponent } from './carousel-eventos/carousel-eventos.component';
import { CarouselComunidadComponent } from './carousel-comunidad/carousel-comunidad.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    MosaicCcComponent,
    GridNovedadesComponent,
    CarouselPromosComponent,
    CarouselEventosComponent,
    CarouselComunidadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
