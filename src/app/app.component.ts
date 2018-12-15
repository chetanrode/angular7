import { Component, Input, HostListener, Inject } from '@angular/core';
import { ServiceService } from './student-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chetan Practice';

  constructor(@Inject(ServiceService) serviceService) {
    console.log(serviceService);
   // console.log('Hi I am component');
  }

  @Input()
  studentProperty: string;

  @HostListener('click', ['$event'])
    onhostclick(event: Event) {
     // alert('This is hostlistner Method decoratorng !! ');
    }

    Register(regForm: NgForm) {
        const firstname = regForm.controls.firstname.value;
        const lastname = regForm.controls.lastname.value;
        const mail = regForm.controls.email.value;
        const phonenum = regForm.controls.phone.value;
        console.log(firstname);
        console.log(lastname);
        console.log(mail);
        console.log(phonenum);

}
}
