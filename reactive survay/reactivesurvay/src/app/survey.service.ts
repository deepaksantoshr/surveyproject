import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SurveyService {

qarray:any[];
i:number=0;
link:string;
questions:String[];
name:String;
      constructor(private http:Http) { }
      createModel(QuestionArray:any[],nameOfCandidate:String){
                  this.qarray =    QuestionArray;

                  for(let q in QuestionArray ){
                  this.qarray[this.i]= QuestionArray[q].ques;
                  this.i++;
                  }
                  
                 
                  var sendjson = {"name" : nameOfCandidate,
                                  "questions": this.qarray
                  };
                   
                  let headers = new Headers({'Content-Type':'application/json'});
                  let options = new RequestOptions({'headers':headers});
                  
                  this.http.post("http://localhost:6336/add",JSON.stringify(sendjson),options).subscribe((data)=>{console.log(data)});
                  this.link = "http://localhost:6336/findbyid/"+nameOfCandidate;
                  this.name = nameOfCandidate;
                
                  
      }
      getQuestions(l){         
       return this.http.get(l).map(res => res.json());
      }

      getQuestionsWithoutLink(){
        return this.http.get(this.link).map(res => res.json());
      }
      getQuestionsByName(name){
        let url = "http://localhost:6336/findbyid/"+name;   
        console.log(url);     
        return this.http.get(url).map(res => res.json());
      }
}