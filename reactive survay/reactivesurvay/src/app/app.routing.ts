import {RouterModule,Routes,ActivatedRoute} from '@angular/router';
import{AppComponent} from './app.component';
import { DisplayformComponent } from './displayform/displayform.component';
import { SurveyLinkComponent } from './survey-link/survey-link.component';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
      {path:'AppComponent',component:AppComponent},
      {path:'home',component:HomeComponent},
      {path:'surveyLink/:name', component:SurveyLinkComponent}      
  ];

export const routing = RouterModule.forRoot(appRoutes);
