var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
 document.querySelector(".container").classList.toggle("show-menu");
});

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animation';
const imagens = document.querySelectorAll('[data-img]');
const ClassImg = 'animationImg'
const linha = document.querySelectorAll('[data-linha]');
const Classlinha = 'animationlinha'
const titulo = document.querySelectorAll('[data-titulo]');
const Classtitulo = 'animationtitulo'


function animeScroll(){
   const windowTop = window.pageYOffset - ((window.innerHeight*3)/10);
   target.forEach(function(element){
       if(windowTop > element.offsetTop){
           element.classList.add(animationClass);
       } 
    
   })
}
function animeimgScroll(){
    const windowTop = window.pageYOffset - ((window.innerHeight*3)/5);
    imagens.forEach(function(imagem){
        if(windowTop > imagem.offsetTop){
            imagem.classList.add(ClassImg);
        }
     
    })
 }
 function animelinhaScroll(){
    const windowTop = window.pageYOffset - ((window.innerHeight*3)/30);
    linha.forEach(function(linhas){
        if(windowTop > linhas.offsetTop){
            linhas.classList.add(Classlinha);
        }
     
    })
 }
 function animetituloScroll(){
    const windowTop = window.pageYOffset - ((window.innerHeight*3)/30);
    titulo.forEach(function(titulos){
        if(windowTop > titulos.offsetTop){
            titulos.classList.add(Classtitulo);
        }
     
    })
 }

window.addEventListener('scroll', function(){
    animetituloScroll()
    animelinhaScroll()
    animeScroll();
    animeimgScroll();
    
})