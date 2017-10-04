import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {routing} from './app.routing';
import { AppComponent }   from './app.component';
import { AddressComponent } from './ques.component';
import { DisplayformComponent } from './displayform/displayform.component';
import {HttpModule} from '@angular/http';
import { LinkComponent } from './link/link.component';
import { SurveyLinkComponent } from './survey-link/survey-link.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
{path:'home', component:HomeComponent}, {path:'surveyLink/:name', component:SurveyLinkComponent}];
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule, ReactiveFormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, AddressComponent ,DisplayformComponent, LinkComponent, SurveyLinkComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }