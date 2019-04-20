function insert(char){
            var a =document.getElementById("text").innerHTML;
            var lun = a.length;
           
                if(char=='+' || char=='-' || char=='*' || char=='/'){
                        if(a.charAt(lun-2)!='-' && a.charAt(lun-2)!='+' && a.charAt(lun-2)!='*' && a.charAt(lun-2)!='/' && lun>=1){
                        document.getElementById("text").innerHTML=a+" " + char + " ";
                            }
                }else{
                    if(char=='0'){
                        if(a.length>=1)
                         document.getElementById("text").innerHTML=a+"0";
                    }else if(char=='c'){
                        document.getElementById("text").innerHTML="";
                        document.getElementById("out").innerHTML="";
                    }else if(char=='ce'){ 
                        document.getElementById("text").innerHTML=a.substr(0,lun-2);
                    }else if(char=='equal'){
                        document.getElementById("out").innerHTML=eval(a);
                        document.getElementById("text").innerHTML=eval(a);
                    }else{
                        document.getElementById("text").innerHTML=a+char;
                    }
                }
                    
   }