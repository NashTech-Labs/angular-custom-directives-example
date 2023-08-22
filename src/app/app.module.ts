import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NashtechComponent } from './nashtech/nashtech.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RenderHighlightDirective } from './directives/render-highlight.directive';
import { MouseHoverDirective } from './directives/mouse-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NashtechComponent,
    UsersComponent,
    RenderHighlightDirective,
    MouseHoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
