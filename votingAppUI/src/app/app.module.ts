import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PollListComponent } from './polls/poll-list/poll-list.component';
import { UniquePipe } from './shared/unique.pipe';

@NgModule({
  declarations: [
  AppComponent,
  routingComponent,
  HomeComponent,
  HeaderComponent,
  SidebarComponent,
  UniquePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // RouterModule.forRoot([      
    //   { path: 'polls', component: AppComponent, children : [
    //     { path: 'newpoll', component: NewPollComponent },
    //     { path: 'listall', component: PollListComponent },  
    //     { path: 'showresults', component: PollResultsComponent },  
    //   ]},
    //   { path: 'signin', component: SignInComponent },  
    //   { path: 'signout', component: SignOutComponent },  
    //   { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },  
    //   { path: '**', redirectTo: 'AppComponent', pathMatch: 'full' }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
