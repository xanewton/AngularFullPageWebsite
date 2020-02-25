import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
import { AppRoutingModule } from './app-routing.module';
import { FullpageDirective } from './shared/directives/fullpage.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
