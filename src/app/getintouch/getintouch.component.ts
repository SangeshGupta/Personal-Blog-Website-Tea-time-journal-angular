import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})
export class GetintouchComponent {
  loginForm= new FormGroup({
    user: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    text : new FormControl('',[Validators.required])
  })
  loginUser()
  {
    console.log(this.loginForm);
  }
  
  get user(){
    return this.loginForm.get('user')
  }
}
