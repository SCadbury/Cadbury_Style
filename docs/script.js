//Aplicando primero el tema guardado antes de recargar la página
const guardarTema = localStorage.getItem('tema') || 'theme-dark'; //Tema oscuro por defecto
document.documentElement.className = guardarTema;

document.addEventListener('DOMContentLoaded', function(){
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const body = document.documentElement;

    //Cambiar icono y cargar tema guardado
    const guardarTema = localStorage.getItem('tema');
    cambiarIcono(guardarTema || 'theme-light');

    //Cambiar y guardar tema
    themeToggleBtn.addEventListener('click', function(){
        if (body.classList.contains('theme-light')) {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            localStorage.setItem('tema', 'theme-dark');
            cambiarIcono('theme-dark');
        }else{
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            localStorage.setItem('tema', 'theme-light');
            cambiarIcono('theme-light');
        }
    });

    function cambiarIcono(tema){
        if (tema == 'theme-light') {
            themeToggleBtn.textContent = '🌙';   

        }else{
            themeToggleBtn.textContent = '☀️';
        }
    }
});

function copiarCodigo(id){
    var codigo = document.getElementById(id).textContent;
    navigator.clipboard.writeText(codigo)
    .then(()=>{

    }).catch((err)=>{
        
    });
}
