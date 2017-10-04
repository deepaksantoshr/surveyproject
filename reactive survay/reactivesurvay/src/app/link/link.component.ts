import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  name: String;
  questions:String[];
  data:any;
  isSubmitted:boolean = true;

  constructor(private route: ActivatedRoute, private surveyService:SurveyService ) {
   }

  ngOnInit() {
  }

  getQuestions(){
    
      this.surveyService.getQuestionsWithoutLink().subscribe (   d => {
      this.data = d;
      alert(JSON.stringify(this.data));
      this.questions = this.data[0].questions;
      this.isSubmitted = false;
  },
  error => console.log(error),
  () => console.log("done")
);
  }

}
