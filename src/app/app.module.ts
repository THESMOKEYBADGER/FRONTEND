import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FruitCreateComponent } from './fruit/fruit-create/fruit-create.component';
import { FruitDisplayComponent } from './fruit/fruit-display/fruit-display.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from './auth/auth-service.service';
import { ErrorComponent } from './error/error/error.component';
import { ErrorInterceptor } from './error/error/error.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessInterceptor } from './success/success.interceptor'
import { SuccessComponent } from './success/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitCreateComponent,
    FruitDisplayComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule, // Add MatDialogModule to imports
  ],
  providers: [
    AuthServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
