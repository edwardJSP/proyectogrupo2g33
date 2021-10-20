function ir (){

  var c="2468";
  var u="NAME";
  
  var correo = document.getElementById("inputmail").value
  
  var nill="";
  var contra = document.getElementById("inputpassword").value
  
      if (contra==c & correo==u){
      alert("Bienvenido a G2 Inventory");
      window.location="inventory.html";}
        else if (contra==nill){
        alert("No ingreso contraseña intentelo de nuevo.");}
        else if (correo==nill){
          alert("No ingreso un correo intentelo de nuevo.");}
          else if (contra==nill & contra==nill){
            alert("No ingreso contraseña ni correo intentelo de nuevo.");}
           else{ 
           alert("Porfavor ingrese, nombre y usuario correcto.");
        
      }
      
      
      
      }
