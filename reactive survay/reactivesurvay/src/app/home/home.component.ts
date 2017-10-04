import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public myForm: FormGroup;
  isSubmitted:boolean = false;
  Question:any[];
  name:String="";
  constructor(private _fb: FormBuilder,private router:Router) { }

  ngOnInit() {
      this.myForm = this._fb.group({
          name: ['', [Validators.required, Validators.minLength(5)]],
          addresses: this._fb.array([])
      });
      this.addAddress();
      
  }

  initAddress() {
      return this._fb.group({
          ques: ['', Validators.required],
          
      });
  }
  onSubmit(){
    
  }
  addAddress() {
      const control = <FormArray>this.myForm.controls['addresses'];
      const addrCtrl = this.initAddress();
      
      control.push(addrCtrl);
  }

  removeAddress(i: number) {
      const control = <FormArray>this.myForm.controls['addresses'];
      control.removeAt(i);
  }

  save(model: Customer) {
      
      for(let e in this.myForm.value.addresses)
      {
          this.Question=this.myForm.value.addresses;
      }
      this.isSubmitted=true;
  }

}
