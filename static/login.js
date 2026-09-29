'use strict'

document.addEventListener("DOMContentLoaded",() => {
    let form = document.getElementById("login");

    if(form){
        form.addEventListener("submit",(e) => {
            e.preventDefault();
            
            let formData = new FormData(form);

            fetch("/accounts/login/",{
                method:"POST",
                body:formData,
            })

            e.target.submit();

        })
    }

})