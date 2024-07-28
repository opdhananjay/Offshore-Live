import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private fb:FormBuilder,private titleService: Title, private metaTagService: Meta){}


  ngOnInit() {
    this.titleService.setTitle("Contact Us - HRSM Offshore Services LLP | Premier Offshore Recruitment & Staffing Solutions");

    this.metaTagService.addTags([
      { name: 'description', content: 'Get in touch with HRSM Offshore Services LLP, your premier partner for offshore recruitment and staffing solutions. Contact us for inquiries about our services, career opportunities, or partnerships in Mumbai, India, and worldwide.' },
      { name: 'keywords', content: 'contact HRSM Offshore Services LLP, offshore recruitment, staffing solutions, career opportunities, inquiries, partnerships, Mumbai, India, global recruitment, talent acquisition, offshore staffing' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Contact Us - HRSM Offshore Services LLP | Premier Offshore Recruitment & Staffing Solutions' },
      { property: 'og:description', content: 'Get in touch with HRSM Offshore Services LLP, your premier partner for offshore recruitment and staffing solutions. Contact us for inquiries about our services, career opportunities, or partnerships in Mumbai, India, and worldwide.' },
      { property: 'og:image', content: 'https://www.hrsmoffshore.com' },
      { property: 'og:url', content: 'https://www.hrsmoffshore.com/contact-us' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Contact Us - HRSM Offshore Services LLP | Premier Offshore Recruitment & Staffing Solutions' },
      { name: 'twitter:description', content: 'Get in touch with HRSM Offshore Services LLP, your premier partner for offshore recruitment and staffing solutions. Contact us for inquiries about our services, career opportunities, or partnerships in Mumbai, India, and worldwide.' },
      { name: 'twitter:image', content: 'https://www.hrsmoffshore.com' }
    ]);
  }

  // form submit variable in action -
  submit_form ="https://api.web3forms.com/submit"
  emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"

  // after submitting reset form fields
  contactForm:FormGroup = this.fb.group({
    Name:["",[Validators.required,Validators.maxLength(20)]],
    Email:["",[Validators.required,Validators.pattern(this.emailRegex)]],
    Subject:["",[Validators.maxLength(30)]],
    Message:["",[Validators.required,Validators.maxLength(50)]]
  })

  getControllers(name:string){
    return this.contactForm.get(name)
  }


 async submitNow(event:any){

        const formData = new FormData(event.target);

        formData.append("access_key", "d322abb5-52c7-4f49-9e95-9f735cc39ddb");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        
        const data = await response.json();

        if (data.success) {
          alert("Form Submitted Successfully,we will Contact you soon...");
          event.target.reset();
        } else {
          console.log("Error", data);
          alert(data.message);
        }
      }

    }
  
  
