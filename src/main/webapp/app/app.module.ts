import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { EcommerceSharedModule } from 'app/shared/shared.module';
import { EcommerceCoreModule } from 'app/core/core.module';
import { EcommerceAppRoutingModule } from './app-routing.module';
import { EcommerceHomeModule } from './home/home.module';
import { EcommerceEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    EcommerceSharedModule,
    EcommerceCoreModule,
    EcommerceHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EcommerceEntityModule,
    EcommerceAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class EcommerceAppModule {}
