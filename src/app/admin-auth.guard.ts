import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  let Password:any = prompt("Enter Password")  
  if(Password === "hrsmadmin"){
    return true
  }else{
    return false
  }
};


// this is auth guard file 