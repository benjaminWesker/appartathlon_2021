import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './home/welcome/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'home', component : WelcomeComponent},
      {path : '', component : WelcomeComponent, pathMatch : 'full'},
      {path : '**', component : WelcomeComponent, pathMatch : 'full'}
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
