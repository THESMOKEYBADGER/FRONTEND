import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FruitServiceService } from '../fruit-service.service';

@Component({
  selector: 'app-fruit-create',
  templateUrl: './fruit-create.component.html',
  styleUrls: ['./fruit-create.component.css']
})
export class FruitCreateComponent {
  addfruitForm: FormGroup;

  constructor(public fruitService: FruitServiceService) {
    this.addfruitForm = new FormGroup({
      enteredId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\s_-]+$')]),
      enteredName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z0-9\s_-]+$')]),
    });
  }

  async onaddfruit() {
    if (this.addfruitForm.valid) {
      const enteredId = this.addfruitForm.value.enteredId;
      const enteredName = this.addfruitForm.value.enteredName;

      await this.fruitService.addfruit_service(enteredId, enteredName);

      // Clear the form
      this.addfruitForm.reset();
    }
  }
}
