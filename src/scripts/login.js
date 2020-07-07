console.log("Entrei login");
function login(event) {
    event.preventDefault()
    var username = document.getElementById('username').value;
    var senha = document.getElementById('senha').value;
    var tbmotoristas = JSON.parse(localStorage.getItem("tbmotoristas"));
    var tbuniversitarios = JSON.parse(localStorage.getItem("tbuniversitarios"));
    var verifica = false;
    if (tbmotoristas) {

        for (i = 0; i < tbmotoristas.length; i++) {
            var tbmotoristasJSON = JSON.parse(tbmotoristas[i]);
            if (username === tbmotoristasJSON.email && senha === tbmotoristasJSON.senha) {
                verifica = true;
                tbmotoristasJSON.status = true;
                tbmotoristasJSON.tipo = "motorista";
                sessionStorage.setItem("logged", JSON.stringify(tbmotoristasJSON));
                Swal.fire('Perfil em construção')
            }
        }
    }
    if (tbuniversitarios) {
        for (i = 0; i < tbuniversitarios.length; i++) {
            var tbuniversitariosJSON = JSON.parse(tbuniversitarios[i]);
            if (username === tbuniversitariosJSON.email && senha === tbuniversitariosJSON.senha) {
                verifica = true;
                tbuniversitariosJSON.status = true;
                tbuniversitariosJSON.tipo = "universitario";
                sessionStorage.setItem("logged", JSON.stringify(tbuniversitariosJSON));
                Swal.fire('Perfil em construção')
            }
        }

    }
    if (verifica === false) {
        var texto = "E-mail ou senha incorreta";
        erro(texto);
    }
}
function redefinirSenha(event) {
    event.preventDefault()
    var tbmotoristas = JSON.parse(localStorage.getItem("tbmotoristas"));
    var tbuniversitarios = JSON.parse(localStorage.getItem("tbuniversitarios"));
    Swal.mixin({
        input: 'email',
        confirmButtonText: ' Continuar',
        cancelButtonText: ' Cancelar',
        showCancelButton: true,
        progressSteps: ['1']
    }).queue([
        {
            title: 'Digite seu e-mail',

        }]).then((result) => {
            if (result.value) {
                const email = JSON.stringify(result.value);
                var emailJSON = JSON.parse(email);
                var verifica = false;
                
                if (tbmotoristas) {
                    for (i = 0; i < tbmotoristas.length; i++) {
                        var tbmotoristasJSON = JSON.parse(tbmotoristas[i]);

                        if (emailJSON == tbmotoristasJSON.email) {
                            verifica = true;
                            console.log("motorista email ok");
                            var tbNome = "tbmotoristas";
                            var tb = tbmotoristas;
                            senha(tbmotoristasJSON,tbNome,tb);
                        }
                        
                    }
                }
                if (tbuniversitarios) {
                    for (i = 0; i < tbuniversitarios.length; i++) {
                        var tbuniversitariosJSON = JSON.parse(tbuniversitarios[i]);
                        

                        if (emailJSON == tbuniversitariosJSON.email) {
                            verifica = true;
                            var tbNome = "tbuniversitarios";
                            senha(tbuniversitariosJSON,tbNome);
                        }

                    }

                }
                if (verifica === false) {
                    var texto = "E-mail não cadastrado";
                    erro(texto);
                }
            }
        })
        


}
function senha(tbJSON,tbNome,tb){
        /*Ainda não está funcionando*/
        console.log("entrei senha");
        console.log(tbJSON);
        
        Swal.mixin({
            input: 'password',
            confirmButtonText: ' Continuar',
            cancelButtonText: ' Cancelar',
            showCancelButton: true,
            progressSteps: ['2']
        }).queue([
            {
                title: 'Digite sua nova senha',

            }]).then((result) => {
                if (result.value) {
                    const novaSenha = JSON.stringify(result.value);
                    var senhaJSON = JSON.parse(novaSenha);
                    if(tbNome==="tbmotoristas"){ 
                    tb.senha = senhaJSON;
                    localStorage.setItem(tbNome, JSON.stringify(tb));

                    }else if(tbNome==="tbuniversitarios"){

                        localStorage.setItem("tbuniversitarios", JSON.stringify(tbuniversitarios));
                    }

                    console.log(novaSenha);

                    Swal.fire({
                        title: '',
                        html: `
      Senha alterada com sucesso!
    `,
                        confirmButtonText: 'Ok'
                    })
                }
            })
    
}
function erro(texto) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: texto
    })
}
