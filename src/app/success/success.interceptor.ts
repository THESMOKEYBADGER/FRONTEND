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
import { SuccessComponent } from './success/success.component';
import { tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse && (event.status === 200 || event.status === 201)) {
          let successMessage = 'Success message';
          if ((event as HttpResponse<any>).body && (event as HttpResponse<any>).body.message) {
            successMessage = (event as HttpResponse<any>).body.message;
          }
          this.dialog.open(SuccessComponent, { data: { message: successMessage } });
        }
      })
    );
  }
}
