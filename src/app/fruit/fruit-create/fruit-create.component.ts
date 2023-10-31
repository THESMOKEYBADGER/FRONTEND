import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FruitServiceService } from '../fruit-service.service';

@Component({
  selector: 'app-fruit-create',
  templateUrl: './fruit-create.component.html',
  styleUrls: ['./fruit-create.component.css']
})
export class FruitCreateComponent {

  constructor(public fruitervice: FruitServiceService) { }

  onaddfruit(fruitform: NgForm) {

    if (fruitform.invalid)
    {
      alert('Invalid!')
      return
    }
    alert(fruitform.value.enteredID+':'+fruitform.value.enteredName)

    this.fruitervice.addfruit_service(fruitform.value.enteredID,fruitform.value.enteredName)
    fruitform.resetForm
  }
}
