import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users!:[id:number,name:string,age:number,address:string]
  addUser !: FormGroup;

  constructor(private Route : Router,
    private userService:UserServiceService) { }
  
  user=this.userService.users

  ngOnInit(): void {
    const id = new FormControl(this.user.length+1)

    this.addUser = new FormGroup({
      'id':id,
      'name': new FormControl(null,[Validators.required]),
      'age': new FormControl(null,[Validators.required]),
      'address': new FormControl(null,[Validators.required]),
      'tes': new FormArray([])
    })
  }
  testData:any=(<FormArray>this.addUser.get('tes')).controls
  back(){
    this.Route.navigate(['/user'])
  }

  onSubmit(){
    this.userService.onSubmit(this.addUser.value)
  }
}
