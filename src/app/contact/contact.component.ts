import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false ;
  success = false ;

  constructor(private formBuilder : FormBuilder){

    this.messageForm = this.formBuilder.group({
      name : ['',Validators.required],
      message : ['', Validators.required]
    })
  }

  ngOnInit(){

  }

  firstClick(){
    this.submitted = true ;
    if (this.messageForm.invalid){
      return;
    }


    var f_name = ["Tim", "Ram", "Tina", "Manoj", "Deepak", "Ketan", "Sachin", "Sunil", "Vinnet", "Akansha", "Shivraj", "Mohit", "Vicky"," Naveen","Lalit","Yogesh", "Ankit", "Rishabh"];

    var l_name = ["Munyon","Singh","Mehra", "Mehra","Ahuja" , "Das","Mourya","Singh","Singh","Rawat","Chauhan","Tayagi","Jindal","Agarawal","Tariyal","Bisht","Chauhan","Uniyal"];

    var email = ["Tim@example.com","ram@example.com", "tina@example.com", "manoj@example.com","deepak@example.com","ketan@example.com","sachin@example.com","sunil@example.com","vinnet@example.com","aks@example.com","shniv@example.com","mohit@example.com","vicky@example.com","naveen@example.com","lalit@example.com","yogesh@example.com","ankit@example.com","rishabh@example.com"];

    var loc = ["Delhi", "Delhi","Delhi","Delhi","Delhi","Gurgaon","Gurgaon","Gurgaon","Gurgaon","Gurgaon","Jaipur","Jaipur","Jaipur","Jaipur","Jaipur","Kota","Kota","Kota"];

    var acc = ["702213321","102213321","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323","102213323"];
        var user_name = ["praveen", "shubham", "smr", "mehra"];
        var user_pwd = ["praveen", "shubham", "smr", "mehra"];
        var e = (document.getElementById("select")) as HTMLSelectElement;
        var user = e.options[e.selectedIndex].value;
        //var user = e.options[e.selectedIndex].text;
        var username = (<HTMLInputElement>document.getElementById("u_name")).value;
        var userpwd = (<HTMLInputElement>document.getElementById("u_pwd")).value;

        alert(`${user} Type Account`);

        if (user==="Account Type"){
          alert("'Account Type' not selected");
          return;
        }

        var flag=0;


        for (var i = 0; i < user_name.length; i++) {


          if (user_name[i]===username){
            flag=1;

            if (user==="Manager"){

                for (var j=0 ; j<f_name.length;j++){

                  var x = "";

                  x+= "Name : ";
                  x += f_name[j];
                  x += " ";
                  x+= l_name[j];
                  document.write("&nbsp &nbsp &nbsp &nbsp");
                  x+= "    Email : "
                  x+=email[j];
                  x+= "    Account No. : "
                  x+=acc[j];
                  x+="    Location : ";
                  x+= loc[j];

                  document.write(x);
                  document.write("<br/>");

                /*  var x = f_name[j];

                  document.getElementById("fname").innerHTML = x ;
                  document.getElementById("lname").innerHTML = l_name[j] ;
                  document.getElementById("email").innerHTML = email[j] ;
*/

                }
            }

            else if(user==="Superviser1"){

              for (var j=0;j<loc.length;j++){
                if (loc[j]==="Delhi" || loc[j]==="Gurgaon"){

                    var x = "";

                    x+= "Name : ";
                    x += f_name[j];
                    x += " ";
                    x+= l_name[j];
                    document.write("&nbsp &nbsp &nbsp &nbsp");
                    x+= "    Email : "
                    x+=email[j];
                    x+= "    Account No. : "
                    x+=acc[j];
                    x+="    Location : ";
                    x+= loc[j];

                    document.write(x);
                    document.write("<br/>");

                }
              }
            }

                else if(user==="Superviser2"){

                  for (var j=0;j<loc.length;j++){

                    if (loc[j]==="Jaipur" || loc[j]==="Kota"){

                            var x = "";

                            x+= "Name : ";
                            x += f_name[j];
                            x += " ";
                            x+= l_name[j];
                            document.write("&nbsp &nbsp &nbsp &nbsp");
                            x+= "    Email : "
                            x+=email[j];
                            x+= "    Account No. : "
                            x+=acc[j];
                            x+="    Location : ";
                            x+= loc[j];

                            document.write(x);
                            document.write("<br/>");

                    }
                  }
                }

                      else if(user==="Employee"){

                        for (var j=0;j<loc.length;j++){
                          if (loc[j]==="Delhi"){

                              var x = "";
                              x+= "Name : ";

                              x += f_name[j];
                              x += " ";
                              x+= l_name[j];

                              document.write("&nbsp &nbsp &nbsp &nbsp");

                              x+= "    Email : "
                              x+=email[j];
                              x+= "    Account No. : "
                              x+=acc[j];
                              x+="    Location : ";
                              x+= loc[j];

                              document.write(x);
                              document.write("<br/>");

                          }
                        }
                      }
          }

          if (flag===1){
            break;
          }
        }

        if (flag===0){
          alert("Invalid user name or password");
          return;
        }

        this.success = true;
  }
}
