import { Component, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements AfterViewInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private dialogRef: MatDialogRef<SuccessComponent>
  ) {}

  ngAfterViewInit() {
    // Close the dialog automatically after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  }
}
