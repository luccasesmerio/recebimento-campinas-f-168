const container = document.getElementById('botoes');
const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const dados = JSON.parse(localStorage.getItem('registroLetras')) || {};

letras.forEach(letra => {
    const btn = document.createElement('button');
    btn.textContent = letra;
    btn.onclick = () => {
        dados[letra] = (dados[letra] || 0) + 1;
        localStorage.setItem('registroLetras', JSON.stringify(dados));
    };
    container.appendChild(btn);
});

function resetarDados() {
    if (confirm("Tem certeza que deseja resetar os dados do dia?")) {
        localStorage.removeItem('registroLetras');
        location.reload();
    }
}