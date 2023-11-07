import { Component, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements AfterViewInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private dialogRef: MatDialogRef<ErrorComponent>
  ) {}

  ngAfterViewInit() {
    // Close the dialog automatically after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      this.dialogRef.close();
    }, 2500);
  }
}
