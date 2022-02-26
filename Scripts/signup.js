async function Register(e){

    try{
    
    //   console.log("inside")
    //    e.preventDefault();
    
       var register_data = {
         first_name:document.getElementById("f_name").value,
         last_name:document.getElementById("l_name").value,
         email:document.getElementById("email").value,
         password:document.getElementById("password").value,
       }
    
    // console.log(register_data)
       register_data=JSON.stringify(register_data)
      //  console.log(register_data)
    
    }catch(err){
    
    console.log(err)
    }
    
    let reg_api = `https://blooming-refuge-71619.herokuapp.com/register`
    
    let responce = await fetch(reg_api,{
      method:"POST",
      body:register_data,
      headers:{
        "Content-Type":"application/json",
      },
    });
    
    let data = await responce.json();
    
    console.log("data",data)
    }
    

    async function Login(e){

        try{
           var register_data = {
             email:document.getElementById("rloginemail").value,
             password:document.getElementById("rloginpassword").value,
           }
        
        // console.log(register_data)
           register_data=JSON.stringify(register_data)
          //  console.log(register_data)
        
        }catch(err){
        
        console.log(err)
        }
        
        let reg_api = `https://blooming-refuge-71619.herokuapp.com/login`
        
        let responce = await fetch(reg_api,{
          method:"POST",
          body:register_data,
          headers:{
            "Content-Type":"application/json",
          },
        });
        
        let data = await responce.json();
        console.log("data",data.user_data._id);
        console.log("data hey hey",data.user_data.first_name);

        if(data.message!=undefined){
            alert("Wrong Credential");
            document.getElementById("rloginemail").value=null;
            document.getElementById("rloginpassword").value=null;
        }
        else{
            localStorage.setItem("currentUser",JSON.stringify(data));
            alert("Login Successfull");
            window.location.href="index.html"
        }
        }


