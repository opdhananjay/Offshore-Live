import { Component } from '@angular/core';
import { ResumeService } from '../resume-upload-service/resume.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private resume:ResumeService){}

  Data:any
  Total_Applicant = 0

  generateDisabled:boolean = false
  generateDisabled1:boolean = true
  spinner:boolean = false

  excelFilename!:string

  base_url = "https://backenddoc.onrender.com/"
  base_excel = "https://backenddoc.onrender.com/api/downloadExcel/";

  ngOnInit(){
    this.getData()
  }


  getData(){
    this.resume.getData().subscribe((data:any)=>{
      if(data){
        this.Data = data.data
        this.Total_Applicant = data.data.length
        setTimeout(() => {
          this.spinner = true
        }, 3000);
      }
    })
  }


  generateExcel(){
    this.spinner = false
    this.resume.generateExcel().subscribe((result:any)=>{
      if(result.status == true){
          this.excelFilename = result.data.split("/")[1]
          alert("File is Generated Succesfully")
          this.generateDisabled = true
          this.generateDisabled1 = false
          setTimeout(() => {
            this.spinner = true
          }, 3000);
      }else{
        alert("Click Again to Generate File")
      }
    })
  }

  loadingSpinner(){

  }
 

}
