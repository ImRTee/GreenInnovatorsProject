import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryBarComponent } from './header/category-bar/category-bar.component';
import { HomeComponent } from './home/home.component';

import {AppRoutingModule} from "./app-routing.module";
import { FooterComponent } from './footer/footer.component';
import {LinkService} from "./link.service";
import { LinkItemComponent } from './home/link-item/link-item.component';
import { LinkDetailComponent } from './home/link-detail/link-detail.component';
import { LinkGroupComponent } from './link-group/link-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryBarComponent,
    HomeComponent,
    FooterComponent,
    LinkItemComponent,
    LinkDetailComponent,
    LinkGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})

export class AppModule { }
