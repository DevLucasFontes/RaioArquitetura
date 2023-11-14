$(function() {
    $( "#button" ).click(function() {
      $( "#button" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 1250 );
      }
    });

  
  // Obtém a referência para o elemento do ícone
  const iconMensagem = document.getElementById("icon-mensagem");

  // Adiciona um evento de clique ao elemento do ícone
  iconMensagem.addEventListener("click", function() {
    // Cria um elemento de texto temporário para copiar para a área de transferência
    const tempInput = document.createElement("input");
    tempInput.value = "contato.raioarquitetura@gmail.com";
    document.body.appendChild(tempInput);

    // Seleciona o texto dentro do elemento de texto temporário
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para seleção em navegadores móveis

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempInput);

    // Feedback ao usuário
    alert("Endereço de e-mail copiado para a área de transferência: contato.raioarquitetura@gmail.com");
  });
