import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryBarComponent } from './header/category-bar/category-bar.component';
import { SideBarComponent } from './main/info/side-bar/side-bar.component';
import {ContentComponent} from './main/info/content/content.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { InfoComponent } from './main/info/info.component';
import {AppRoutingModule} from "./app-routing.module";
import { FooterComponent } from './footer/footer.component';
import {LinkService} from "./link.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryBarComponent,
    SideBarComponent,
    ContentComponent,
    MainComponent,
    HomeComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})

export class AppModule { }
