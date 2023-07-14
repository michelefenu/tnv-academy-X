import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuDetailComponent } from './components/menu-detail/menu-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPiattoComponent } from './components/edit-piatto/edit-piatto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageMenuComponent } from './components/page-menu/page-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ContactsComponent,
    MenuComponent,
    MenuSectionComponent,
    MenuItemComponent,
    MenuDetailComponent,
    EditPiattoComponent,
    PageMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
