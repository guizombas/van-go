console.log("entrei aqui morosita");
//SALVANDO NO LOCAL STORAGE
//Definindo as variaveis globais

function salvar(event) {
    event.preventDefault()
    var motorista = JSON.stringify({
        nome: $("#nome").val(),
        email: $("#email").val(),
        cnh: $("#cnh").val(),
        contato: $("#contato").val(),
        senha: $("#senha").val()

    });

    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbmotoristas = localStorage.getItem("tbmotoristas");// Recupera os dados armazenados
    var tbuniversitarios = JSON.parse(localStorage.getItem("tbuniversitarios"));
    tbmotoristas = JSON.parse(tbmotoristas); // Converte string para objeto

    if (tbmotoristas == null) { // Caso não haja conteúdo, iniciamos um vetor vazio
        tbmotoristas = [];
    }
    if (tbuniversitarios != null){
        let emailVU = tbuniversitarios.filter((element) => { return JSON.parse(element).email === $("#email").val() });
        if (emailVU && emailVU.length > 0) {
            var texto = "Email já foi cadastrado";
            erro(texto);
            return true;
        }
    }
    let emailV = tbmotoristas.filter((element) => { return JSON.parse(element).email === $("#email").val() });
    let cnhV = tbmotoristas.filter((element) => { return JSON.parse(element).cnh === $("#cnh").val() });

    if (emailV && emailV.length > 0) {
        var texto = "Email já foi cadastrado";
        erro(texto);
        return true;
    }else if (cnhV && cnhV.length > 0){
        texto = "CNH já foi cadastrado";
        erro(texto);
        return true;
    }else{
        success();
        var intervalo = window.setInterval(recarregar, 1520);
        function recarregar() {
            window.location.href = "login.html";
        }
        
    }
    tbmotoristas.push(motorista);
    localStorage.setItem("tbmotoristas", JSON.stringify(tbmotoristas));
    return true;
}
function erro(texto){
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: texto
    })
}
function success(){
    Swal.fire({
        icon: 'success',
        title: 'Motorista cadastrado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
}