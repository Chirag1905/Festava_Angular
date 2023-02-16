
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dob: any;


  constructor() { }

  ngOnInit(): void {

  }

  contactForm = new FormGroup({
    fname: new FormControl("", [Validators.required]),
    lname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    number1: new FormControl("", [Validators.required]),
    number2: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    bod: new FormControl("", [Validators.required]),
  })

  contactFormSubmited() {
    console.log(this.contactForm.get("fname"));
  }
  get fname(): FormControl {
    return this.contactForm.get("fname") as FormControl;
  }
  get lname(): FormControl {
    return this.contactForm.get("lname") as FormControl;
  }
  get email(): FormControl {
    return this.contactForm.get("email") as FormControl;
  }
  get password(): FormControl {
    return this.contactForm.get("password") as FormControl;
  }
  get number1(): FormControl {
    return this.contactForm.get("number1") as FormControl;
  }
  get number2(): FormControl {
    return this.contactForm.get("number2") as FormControl;
  }
  get address(): FormControl {
    return this.contactForm.get("address") as FormControl;
  }
  get gender(): FormControl {
    return this.contactForm.get("gender") as FormControl;
  }
  get bod(): FormControl {
    return this.contactForm.get("bod") as FormControl;
  }
}
