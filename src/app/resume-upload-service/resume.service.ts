import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  base_url = "https://backenddoc.onrender.com/"

  constructor(private hc:HttpClient) { }

  uploadResume(data:FormData){
      return this.hc.post(this.base_url + "api/resumeInfo",data)
  }

  getData(){
    return this.hc.get(this.base_url + "api/getResumeInfo")
  }

  generateExcel(){
    return this.hc.get("https://backenddoc.onrender.com/api/createExcel")
  }


}
