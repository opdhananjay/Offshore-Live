import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from '../resume-upload-service/resume.service';
import { computeStyles } from '@popperjs/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent {

emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
pattern = /^[0-9]{10}$/;
selectedFile: File | undefined | any;


constructor(private fb:FormBuilder,private resume:ResumeService){}

resumeUpload:FormGroup = this.fb.group({
  fName:["",[Validators.required]],
  lName:["",[Validators.required]],
  Email:["",[Validators.required,Validators.pattern(this.emailRegex)]],
  Phone:["",[Validators.required,Validators.pattern(this.pattern)]],
  currentPosition:["",[Validators.maxLength(30),Validators.required]],
  desirePosition:["",[Validators.maxLength(30),Validators.required]],
  resumeFile:["",[Validators.required]]
})


// taking resume sfile
onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}


// submitting - 

submitNow(event:any){
  console.log(event.target)
  console.log(this.resumeUpload.value)
  const formData = new FormData()

  formData.append("fname",this.resumeUpload.get('fName')?.value)
  formData.append('lname',this.resumeUpload.get('lName')?.value);
  formData.append('email',this.resumeUpload.get('Email')?.value);
  formData.append('phone',this.resumeUpload.get('Phone')?.value);
  formData.append('currentPosition',this.resumeUpload.get('currentPosition')?.value);
  formData.append('desiredPosition',this.resumeUpload.get('desirePosition')?.value);
  formData.append('resumeDoc',this.selectedFile);

  console.log(this.selectedFile)
  console.log(this.resumeUpload.get('fName')?.value)

  // call api

  setTimeout(() => {
    this.resume.uploadResume(formData).subscribe(
      (data: any) => {
        console.log("data", data);
        if (data.message === "Resume and Data Stored successfully") {
          alert("Uploaded Successfully, We will reach you soon..");
        } else {
          alert("Please try Again or Contact us");
        }
      },
      (error: any) => {
        console.error("Error:", error);
        // Handle specific error messages if needed
        if (error instanceof HttpErrorResponse) {
          if (error.status === 400 && error.error.message === "please provide valid 10 digit Phone Number") {
            alert("Please provide a valid 10-digit phone number.");
          } else {
            alert("An error occurred. Please try again later.");
          }
        } else {
          alert("An unexpected error occurred. Please try again later.or Fill Details Correctly");
        }
      }
    );
  }, 1000);
  


}


  



}
