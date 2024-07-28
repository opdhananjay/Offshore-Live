import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { WorkCounterComponent } from './work-counter/work-counter.component';
import { Home1Component } from './home1/home1.component';
import { Home2ServicesComponent } from './home2-services/home2-services.component';
import { MapComponent } from './map/map.component';
import { IndustryComponent } from './industry/industry.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { CareersComponent } from './careers/careers.component';
import { PermanentRecruitmentComponent } from './Services Components/permanent-recruitment/permanent-recruitment.component';
import { ContractRecruitmentComponent } from './Services Components/contract-recruitment/contract-recruitment.component';
import { TravelLogistixComponent } from './Services Components/travel-logistix/travel-logistix.component';
import { TrainingCompetencyManagementComponent } from './Services Components/training-competency-management/training-competency-management.component';
import { CoordinationManagemenetComponent } from './Services Components/coordination-managemenet/coordination-managemenet.component';
import { RecruitmentAlertComponent } from './recruitment-alert/recruitment-alert.component';
import { QhsePolicyComponent } from './qhse-policy/qhse-policy.component';
import { DrillingComponent } from './industry component/drilling/drilling.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MarineComponent } from './industry component/marine/marine.component';
import { HookupComponent } from './industry component/hookup/hookup.component';
import { CateringComponent } from './industry component/catering/catering.component';
import { TechnicalSupportComponent } from './industry component/technical-support/technical-support.component';
import { ManagementComponent } from './industry component/management/management.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderHomeComponent,
    ContactUsComponent,
    FooterComponent,
    AboutUsComponent,
    TeamComponent,
    OurServicesComponent,
    WorkCounterComponent,
    Home1Component,
    Home2ServicesComponent,
    MapComponent,
    IndustryComponent,
    ResumeUploadComponent,
    CareersComponent,
    PermanentRecruitmentComponent,
    ContractRecruitmentComponent,
    TravelLogistixComponent,
    TrainingCompetencyManagementComponent,
    CoordinationManagemenetComponent,
    RecruitmentAlertComponent,
    QhsePolicyComponent,
    DrillingComponent,
    AdminHomeComponent,
    MarineComponent,
    HookupComponent,
    CateringComponent,
    TechnicalSupportComponent,
    ManagementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
