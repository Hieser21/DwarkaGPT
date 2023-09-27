window.addEventListener("DOMContentLoaded", () => {  
   var myToast = Toastify({
  text: "This page is still in development, so please expect bugs. Click this toast to join the Discord and keep track of bugs and updates.",
  duration: 5000,
  destination: "https://discord.gg/dwarka",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();
});  

(function () {  
  function get_api_key_from_input() {  
    return "Rfc6iopkthdVWZqeWORUhZwp6MfqdwqGGSTOd2rYD0c " 
  }  
  window.get_api_key_from_input = get_api_key_from_input;
})();  
