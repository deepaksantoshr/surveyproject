import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Route} from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-link',
  templateUrl: './survey-link.component.html',
  styleUrls: ['./survey-link.component.css'],
  providers:[SurveyService]
})
export class SurveyLinkComponent implements OnInit {

  name: String;
  questions:String[];
  isSubmitted:boolean = true;


  constructor(private route:ActivatedRoute, private surveyService:SurveyService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name   = params['name'];    
    });
    this.getQuestions(this.name);
    
  }  
  
  onSubmit(){
    
  }  
  
    getQuestions(name){
      console.log("name ----->"+name);      
        this.surveyService.getQuestionsByName(name).subscribe (   d => {
        this.questions = d[0].questions;
        this.isSubmitted = false;
    },
    error => console.log(error),
    () => console.log("done")
  );
    }
  
  }
