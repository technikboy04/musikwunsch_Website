import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardServiceService } from '../authguard-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup;

  constructor(private Authguardservice: AuthguardServiceService, private router: Router, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: '',
      pass: ''
    });

   }
  formSubmit(formData: any){
    
    var key = btoa(btoa(formData['name']) + '???' + btoa(formData['pass']));

    sessionStorage.setItem('sessionID', key);

    this.Authguardservice.checkRouteActive();
  }
  ngOnInit(): void {
  }

  
}