let y
let x
let context_Menu = document.querySelector('#contextMenu')

document.body.addEventListener('contextmenu', function(event){
    event.preventDefault()
    if (context_Menu.style.display == 'none'){
        x = 
        y = 
        context_Menu.style.display = 'block'
        context_Menu.style.top = event.pageY + 'px'
        context_Menu.style.left = event.pageX + 'px'
    }else{
        context_Menu.style.top = event.pageY + 'px'
        context_Menu.style.left = event.pageX + 'px'
    }
})

document.body.addEventListener('click', function(event){
    context_Menu.style.display = 'none'
})

document.body.addEventListener('keydown', function(event){
    if (event.keyCode === 27){
        context_Menu.style.display = 'none'
    }
})
