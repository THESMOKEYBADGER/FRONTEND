import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from './success/success.component'; // Import SuccessComponent
import { tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse && event.status === 200) { // Check for successful status code (e.g., 200)
          this.dialog.open(SuccessComponent, { data: { message: 'Success message' } });
        }
      })
    );
  }
}
