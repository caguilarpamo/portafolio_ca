const buttons = document.querySelectorAll(".filter-btn button");

buttons.forEach(button=>{
    button.addEventListener("click",function(){
        button.forEach(btn=>btn.classList.remove("active"));
        this.classList.add("active");
    });
});


//Investigacion - Uso del JS en un boton con estilo - Christian Aguilar
/*document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('delete')) {
        button.classList.add('delete');
        setTimeout(() => button.classList.remove('delete'), 3200);
    }
    e.preventDefault();
}));*/