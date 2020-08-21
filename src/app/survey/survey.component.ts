import { survey } from './../shared/_models/survey.model';
import { surveydata } from './../shared/seeddata';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

questions:object[]=this.surveydata.getquestions();
surveys:survey[]=this.surveydata.getsurvey();

  constructor(private surveydata:surveydata) { }

  ngOnInit(): void {
    console.log(this.surveys);
  }
  click(){
    console.log(this.surveys);
  }

}
