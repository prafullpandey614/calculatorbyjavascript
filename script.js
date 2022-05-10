let string = "";
let buttons = document.querySelectorAll('.btn') ; 
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML);
        if(e.target.innerHTML=="="){
            try{
                string =eval(string);
                document.querySelector('.input').value = string;
            }
            catch{
                string = "ERROR!"
                document.querySelector('.input').value = string;
            }
            
            // document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML=="X"){
    
            string = string+"*";
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML=='C') {
            string="";
            document.querySelector('.input').value = string;
        }
        else{
            string = string + e.target.innerHTML ;
            document.querySelector('.input').value = string;
        }
        
       
    })

})