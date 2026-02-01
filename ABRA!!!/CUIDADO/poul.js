if (senha !== '0105') {
    alert('☢ GAME OVER: acesso bloqueado! ㄟ(≧◇≦)ㄏ');
    document.getElementById("bloqueio").innerText = "🚫 Acesso negado permanentemente!";
} else {
    alert('✔ Acesso concedido... bem-vindo ao sistema (▀̿Ĺ̯▀̿ ̿)!');
    document.getElementById("bloqueio").style.display = "none"; // remove bloqueio
    document.getElementById("conteudo").style.display = "block"; // mostra conteúdo
}
