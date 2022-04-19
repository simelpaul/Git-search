import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user/user.component';
import { ColorDirective } from './directives/color.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserFetchService } from './services/user-fetch.service';
@NgModule({
  declarations: [
    AppComponent,
    DateAgoPipe,
    PageNotFoundComponent,
    UserComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
