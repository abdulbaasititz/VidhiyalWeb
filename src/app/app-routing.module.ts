import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/pages/login/login.component';
import { DashboardComponent } from './features/pages/dashboard/dashboard.component';
import { CreateCustomersComponent } from './features/pages/customerDetails/create-customers/create-customers.component';
import { ViewCustomersComponent } from './features/pages/customerDetails/view-customers/view-customers.component';
import { CreateSubscriptionComponent } from './features/pages/subscriptionDetails/create-subscription/create-subscription.component';
import { ViewSubscriptionComponent } from './features/pages/subscriptionDetails/view-subscription/view-subscription.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'create-customer',component:CreateCustomersComponent},
  {path:'view-customer',component:ViewCustomersComponent},
  {path:'create-subscription',component:CreateSubscriptionComponent},
  {path:'view-subscription',component:ViewSubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
