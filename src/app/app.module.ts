/* IMPORT */
/* ANGULAR IMPORT */
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
/* OTHER PACKAGE IMPORT */
import {GridsterModule} from 'angular-gridster2';
import 'hammerjs';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
/* COMPONENTS IMPORTS */
import {AppComponent} from './app.component';
import {KioskModule} from './kiosk/kiosk.module';
import {StartComponent} from './start.component';
/* ROUTES*/
// const appRoutes: Routes = [
//   {path: 'kiosk', component: KioskComponent},
//   {path: '**', redirectTo: 'kiosk'}
// ];
@NgModule({
  imports: [
    BrowserModule,
    KioskModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridsterModule,
    MarkdownModule.forRoot({loader: HttpClient, markedOptions: {provide: MarkedOptions, useValue: {smartypants: true, breaks: true}}}),
    // RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, StartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
