function submitForm() {

    let fname = document.getElementById("First Name").value;
    let lname = document.getElementById("Last Name").value;
    let email = document.getElementById("Email Address").value;
    let reason = document.getElementById("Reason for Contacting").value;
    console.log(fname,lname,email,reason);
    if(fname!=null && lname!=null && email !=null && reason != null){
      alert("Form Submmited Sucessfully !");
    }
    else{
      alert("All feilds are required");

    }

  }
