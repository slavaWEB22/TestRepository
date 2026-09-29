document.addEventListener('DOMContentLoaded', () => {

    let img = document.getElementById("imageContentPageCard")
    let imageLeft = document.getElementById("imageLeft")
    let imageRight = document.getElementById("imageRight")
    let id = 0

    if(img){
        imageLeft.addEventListener("click",() => {
            img.children[id + 1].style.visibility = "hidden"
            if(id == 0){
                id = img.childElementCount - 3
            }else{
                id -=1
            }
            img.children[id + 1].style.visibility = "visible"
        })
        imageRight.addEventListener("click",() => {
            img.children[id + 1].style.visibility = "hidden"
            if(id == img.childElementCount - 3){
                id = 0
            }else{
                id +=1
            }
            img.children[id + 1].style.visibility = "visible"
        })
            img.children[id + 1].style.visibility = "visible"
    }
});