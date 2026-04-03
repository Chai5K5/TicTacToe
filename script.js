let box_i = document.querySelectorAll(".box")
let n = 0
let turn = 0;
box_i.forEach(box => {
box.addEventListener("click", (e)=>{
        if (turn === 0) {
            turn = 1
            box.textContent = "O"
            box.classList.add("disabledBox")
        } else {
            box.textContent = "X"
            box.classList.add("disabledBox")
            turn = 0
        }
    })
})
