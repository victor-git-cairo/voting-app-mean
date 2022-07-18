import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterPollComponent } from './polls/new-poll/new-poll.component';
import { PollResultsComponent } from './polls/poll-results/poll-results.component';
import { PollListComponent } from './polls/poll-list/poll-list.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignOutComponent } from './account/sign-out/sign-out.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component'

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomeComponent },
  { path: 'newpoll', component: RegisterPollComponent },
  { path: 'polls', component: PollListComponent },
  { path: 'results', component: PollResultsComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signout', component: SignOutComponent },
  { path: '**', redirectTo: 'AppComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AppComponent, RegisterPollComponent, PollListComponent, PollListComponent, SignInComponent, SignOutComponent, HomeComponent, HeaderComponent, SidebarComponent]
