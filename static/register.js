document.addEventListener("DOMContentLoaded",() => {

    let form = document.getElementById("register")

    let formData = new FormData(form)

    form.addEventListener("submit",(e) => {

        e.preventDefault()

        fetch("http://127.0.0.1:8000/accounts/logout/",{
            body:formData,
            method:"POST"
        })

        e.target.submit()

    })
})