'use strict'

document.addEventListener("DOMContentLoaded",() => {
    let form = document.getElementById("logout");

    let formData = new FormData(form)

    if(form){

        form.addEventListener("submit",(e) => {

            e.preventDefault()

            fetch("http://127.0.0.1:8000/accounts/logout/",{
                method:"POST",
                body:formData,
            });

            e.target.submit()
        })



    }
})