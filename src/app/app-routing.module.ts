import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
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
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { adminAuthGuard } from './admin-auth.guard';
import { MarineComponent } from './industry component/marine/marine.component';
import { HookupComponent } from './industry component/hookup/hookup.component';
import { CateringComponent } from './industry component/catering/catering.component';
import { TechnicalSupportComponent } from './industry component/technical-support/technical-support.component';
import { ManagementComponent } from './industry component/management/management.component';

const routes: Routes = [
  {path:"",component:SliderHomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"contactus",component:ContactUsComponent},

  {path:"aboutus",component:AboutUsComponent},
  {path:"qhsepolicy",component:QhsePolicyComponent},

  {path:"ourteam",component:TeamComponent},
  {path:"ourservices",component:OurServicesComponent},

  // Work Counter Component 
  {path:"workcounter",component:WorkCounterComponent},

  // home1
  {path:"home1",component:Home1Component},

  // home2 -services
  {path:"home2",component:Home2ServicesComponent},

  // map
  {path:"map",component:MapComponent},

  //industry
  {path:"industry",component:IndustryComponent},

  // resume upload
  {path:"uploadresume",component:ResumeUploadComponent},

  //career component
  {path:"careers",component:CareersComponent},

  // services - permanent-recruitment
  {path:"permanentrecruitment",component:PermanentRecruitmentComponent},
  {path:"contractrecruitment",component:ContractRecruitmentComponent},
  {path:"travel&logistics",component:TravelLogistixComponent},
  {path:"training&competency",component:TrainingCompetencyManagementComponent},
  {path:"stramlinecoordinationmanagement",component:CoordinationManagemenetComponent},

  // recruitment alert
  {path:"recruitmentalert",component:RecruitmentAlertComponent},

  //industry components
  {path:"drilling",component:DrillingComponent},
  {path:"marine",component:MarineComponent},
  {path:"hookup",component:HookupComponent},
  {path:"catering",component:CateringComponent},
  {path:"technicalsupport",component:TechnicalSupportComponent},
  {path:"management",component:ManagementComponent},

  // Admin
  {path:"AdminHome",component:AdminHomeComponent,canActivate:[adminAuthGuard]},


  //wildcard routing - 
  {path:"**",component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled',anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
