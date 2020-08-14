import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurPortfolioComponent } from './our-portfolio/our-portfolio.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'first', component: AppComponent },
  { path: 'second', component: AppComponent },
  { path: 'third', component: AppComponent },
  { path: 'forth', component: AppComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }