document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('img_some_inf');
    const info = document.getElementById('informacoes');
    const infoBacia = document.getElementById('infoBacia');
    const infoBloco = document.getElementById('infoBloco');
    const infoCampo = document.getElementById('infoCampo');
    const infoPoco = document.getElementById('infoPoco');
    const modalBacia = document.getElementById('modalBacia');
    const modalBloco = document.getElementById('modalBloco');
    const modalCampo = document.getElementById('modalCampo');
    const modalPoco = document.getElementById('modalPoco');
    const bacias = document.getElementById('bacias');
    const bloco = document.getElementById('bloco');
    const campo = document.getElementById('campo');
    const poco = document.getElementById('pocoSelect');
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementsByClassName('close')[0];
  
    function pesquisar() {
        // Oculta a imagem
        img.style.opacity = 0;
  
        // Adiciona um ouvinte de evento para quando a transição terminar
        img.addEventListener('transitionend', function () {
            // Pega os valores selecionados nos selects
            const baciaSelecionada = bacias.options[bacias.selectedIndex].text;
            const blocoSelecionado = bloco.options[bloco.selectedIndex].text;
            const campoSelecionado = campo.options[campo.selectedIndex].text;
            const pocoSelecionado = poco.options[poco.selectedIndex].text;
  
            // Atualiza o conteúdo dos spans com as informações selecionadas
            infoBacia.textContent = baciaSelecionada;
            infoBloco.textContent = blocoSelecionado;
            infoCampo.textContent = campoSelecionado;
            infoPoco.textContent = pocoSelecionado;
  
            // Exibe as informações
            info.style.display = 'block';
        }, { once: true });
    }
  
    function limpar() {
        // Restaura a opacidade da imagem
        img.style.opacity = 1;
  
        // Limpa as informações exibidas
        infoBacia.textContent = '';
        infoBloco.textContent = '';
        infoCampo.textContent = '';
        infoPoco.textContent = '';
  
        // Esconde a div das informações
        info.style.display = 'none';
  
        // Reseta os selects para o valor inicial
        bacias.selectedIndex = 0;
        bloco.selectedIndex = 0;
        campo.selectedIndex = 0;
        poco.selectedIndex = 0;
    }
  
    function abrirModal() {
        modalBacia.textContent = infoBacia.textContent;
        modalBloco.textContent = infoBloco.textContent;
        modalCampo.textContent = infoCampo.textContent;
        modalPoco.textContent = infoPoco.textContent;
        modal.style.display = 'block';
    }
  
    function fecharModal() {
        modal.style.display = 'none';
    }
  
    // Expondo as funções para serem chamadas pelos botões
    window.pesquisar = pesquisar;
    window.limpar = limpar;
    window.abrirModal = abrirModal;
    window.fecharModal = fecharModal;
  
    // Fecha a modal quando o usuário clica fora da modal
    window.onclick = function(event) {
      if (event.target === modal) {
          fecharModal();
      }
    }
  });
  