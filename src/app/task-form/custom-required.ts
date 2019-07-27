import { FormControl } from "@angular/forms";

export class Validate{
    static CustomRequired(control:FormControl){
        let value=(String)(control.value).trim();

        if(value){
            return null;
        }
        else{
            return {Required:true};
        }
    }
    
}