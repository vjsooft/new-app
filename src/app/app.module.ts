import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Share/header/header.component';
import { FooterComponent } from './Share/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './app-module/home/home.component';
import { AsphaltShinglesComponent } from './app-module/asphalt-shingles/asphalt-shingles.component';
import { ClayTilesComponent } from './app-module/clay-tiles/clay-tiles.component';
import { ConcreteTilesComponent } from './app-module/concrete-tiles/concrete-tiles.component';
import { SinglePlyComponent } from './app-module/single-ply/single-ply.component';
import { MetalRoofingComponent } from './app-module/metal-roofing/metal-roofing.component';
import { CommercialGuttersComponent } from './app-module/commercial-gutters/commercial-gutters.component';

// NGX-Bootstrap Tabs RECOMMENDED
import { TabsModule } from 'ngx-bootstrap/tabs';

// NGX-Bootstrap Tabs RECOMMENDED
import { NgImageSliderModule } from 'ng-image-slider';
import { ContactComponent } from './app-module/contact/contact.component';
import { GalleryComponent } from './app-module/gallery/gallery.component';
import { ServicesComponent } from './app-module/services/services.component';
import { AboutComponent } from './app-module/about/about.component';
import { BannerComponent } from './app-module/banner/banner.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'asphalt-shingles', component: AsphaltShinglesComponent },
  { path: 'clay-tiles', component: ClayTilesComponent },
  { path: 'concrete-tiles',component: ConcreteTilesComponent }, 
  { path: 'single-ply',component: SinglePlyComponent },
  { path: 'metal-roofing',component: MetalRoofingComponent },
  { path: 'commercial-gutters',component: CommercialGuttersComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AsphaltShinglesComponent,
    ClayTilesComponent,
    ConcreteTilesComponent,
    SinglePlyComponent,
    MetalRoofingComponent,
    CommercialGuttersComponent,
    ContactComponent,
    GalleryComponent,
    ServicesComponent,
    AboutComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("Main Module Loaded")
  }
}
