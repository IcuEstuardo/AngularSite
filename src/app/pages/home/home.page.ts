import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  genders:any[] = [
    {label: 'Male', value: 'M'},
    {label: 'Female', value: 'F'},
    {label: 'Other', value: 'O'}
  ]

  myForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    gender: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form submitted!', this.myForm.value);
    console.log('Username:', this.myForm.value.username);
    console.log('Password:', this.myForm.value.password);
    console.log('Email:', this.myForm.value.email);
    console.log('Phone:', this.myForm.value.phone);
  }

  onUsernameChange(event:any) {
    console.log('Username changed:', event.target.value);
  }

  onUsernameBlur(event:any) {
    console.log('Username blurred:', event.target.value);
  }

  onUsernameFocus(event:any) {
    console.log('Username focused:', event.target.value);
  }

  onPasswordChange(event:any) {
    console.log('Password changed:', event.target.value);
  }

  onPasswordBlur(event:any) {
    console.log('Password blurred:', event.target.value);
  }

  onPasswordFocus(event:any) {
    console.log('Password focused:', event.target.value);
  }

  onEmailChange(event:any) {
    console.log('Email changed:', event.target.value);
  }

  onEmailBlur(event:any) {
    console.log('Email blurred:', event.target.value);
  }

  onEmailFocus(event:any) {
    console.log('Email focused:', event.target.value);
  }

  onPhoneChange(event:any) {
    console.log('Phone changed:', event.target.value);
  }

  onPhoneBlur(event:any) {
    console.log('Phone blurred:', event.target.value);
  }

  onPhoneFocus(event:any) {
    console.log('Phone focused:', event.target.value);
  }

  onGenderChange(event:any) {
    console.log('Gender changed:', event.target.value);
  }

  onGenderBlur(event:any) {
    console.log('Gender blurred:', event.target.value);
  }

  onGenderFocus(event:any) {
    console.log('Gender focused:', event.target.value);
  }

}
