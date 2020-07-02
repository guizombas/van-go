console.log("entrei aqui universitario");
//SALVANDO NO LOCAL STORAGE
//Definindo as variaveis globais

function salvar(event) {
  event.preventDefault()
  var universitario = JSON.stringify({
    nome: $("#nome").val(),
    universidade: $("#universidade").val(),
    email: $("#email").val(),
    senha: $("#senha").val()

  });

  var indice_selecionado = -1; //Índice do item selecionado na lista
  var tbuniversitarios = localStorage.getItem("tbuniversitarios");// Recupera os dados armazenados
  tbuniversitarios = JSON.parse(tbuniversitarios); // Converte string para objeto

  if (tbuniversitarios == null) { // Caso não haja conteúdo, iniciamos um vetor vazio
    tbuniversitarios = [];
  }

  let result = tbuniversitarios.filter((element) => { return JSON.parse(element).email === $("#email").val() });

  if (result && result.length > 0) {
    var texto = "E-mail já cadastrado";
    erro(texto);
    return true;
  } else {
    success();
        var intervalo = window.setInterval(recarregar, 1520);
        function recarregar() {
            window.location.href = "login.html";
        }

  }

  tbuniversitarios.push(universitario);
  localStorage.setItem("tbuniversitarios", JSON.stringify(tbuniversitarios));



  return true;
}

function erro(texto) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: texto
  })
}
function success() {
  Swal.fire({
    icon: 'success',
    title: 'Estudante cadastrado com sucesso',
    showConfirmButton: false,
    timer: 1500
  })
}