import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { InstructorComponent } from './instructor/instructor.component';
import { CoursesComponent } from './courses/courses.component';
import { WrkspcProfileComponent } from './wrkspc-profile/wrkspc-profile.component';

import { DataService } from './data.service';


const routes: Routes = [
	{ path:'', component:HomeComponent },
	{ path:'Signup', component: SignupComponent },
	{ path:'SignIn', component: SignInComponent },
	{ path:'Admin', component: AdminComponent },
	{ path:'profile', component: WrkspcProfileComponent },
	{ path:'instructor', component: InstructorComponent },
	{ path:'courses', component: CoursesComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
	HomeComponent,
	SignupComponent,
	SignInComponent,
	AdminComponent,
	FooterComponent,
	InstructorComponent,
	CoursesComponent,
	WrkspcProfileComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	HttpClientModule,
	HttpModule,
	FormsModule,
	NgbModule.forRoot(),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
