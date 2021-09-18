import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './features/pages/login/login.component';
import { SidenavComponent } from './shared/controls/sidenav/sidenav/sidenav.component';
import { TopbarComponent } from './shared/controls/topbar/topbar/topbar.component';
import { MaterialModule } from './shared/material-module/material/material.module';
import { DashboardComponent } from './features/pages/dashboard/dashboard.component';
import { MobilemenuComponent } from './shared/controls/mobile-menu/mobilemenu/mobilemenu.component';
import { CreateCustomersComponent } from './features/pages/customerDetails/create-customers/create-customers.component';
import { ViewCustomersComponent } from './features/pages/customerDetails/view-customers/view-customers.component';
import { CreateSubscriptionComponent } from './features/pages/subscriptionDetails/create-subscription/create-subscription.component';
import { ViewSubscriptionComponent } from './features/pages/subscriptionDetails/view-subscription/view-subscription.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    TopbarComponent,
    DashboardComponent,
    MobilemenuComponent,
    CreateCustomersComponent,
    ViewCustomersComponent,
    CreateSubscriptionComponent,
    ViewSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
