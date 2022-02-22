var imagem = document.getElementById('img');
var botao = document.getElementById('bt')

botao.addEventListener('click',() => {
    if(imagem.className == 'off'){
        imagem.style.background = 'orange'
        imagem.src = 'l1.png';
        imagem.className = 'on';
        botao.innerText = 'desligar'
       
        
       
        
    }else{ 
        imagem.style.background = 'black'
        imagem.src = 'l2.png';
        imagem.className = 'off';
        botao.innerText = 'ligar'
        
    }
});

