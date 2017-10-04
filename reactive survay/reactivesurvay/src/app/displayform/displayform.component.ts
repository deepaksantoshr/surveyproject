import { Component, OnInit, Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'formdisplay',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css'],
providers:[SurveyService]
})
export class DisplayformComponent implements OnInit {
  isSubmitted:Boolean = false;
  @Input() QuestionArray;
  @Input() nameOfCandidate;
   link:String = "";
   surveyLink:String = "";
   counter:number = 0;
   questions:String[];
   data:any;
   name: String; 
   
  constructor(private surveyService:SurveyService) { 
    this.name = this.surveyService.name;
  }

  ngOnInit() {
  }
  onClickfn(){
    
    this.isSubmitted = !this.isSubmitted;
    this.surveyService.createModel(this.QuestionArray,this.nameOfCandidate);
    this.link = this.surveyService.link;
    this.counter++;
    if(this.counter%2==0){
      this.isSubmitted = !this.isSubmitted;      
    }

  }
  goToLinkFn(){
    
    this.surveyService.getQuestions(this.link).subscribe (   d => {
    this.data = d;
    this.questions = this.data[0].questions;
      
  },
  error => console.log(error),
  () => console.log("done")
);

this.surveyLink = "localhost:4200/surveyLink/"+this.nameOfCandidate;

  }

}
