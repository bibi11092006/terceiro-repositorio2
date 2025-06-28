const numeroSenha =document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelector.apply(.'parametro-senha_botao');

botoes[0].onclick =diminuiTamanho;
botoes[1].onclick = aumentarTamanho;

function diminuiTamanho(){
   // tamanhoSenha = tamanhoSenha-1;
  if (tamanhoSenha > 1)}
}

function aumentarTamanho(){
    tamanhoSenha--
}
