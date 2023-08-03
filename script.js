function maioridade() {
    var maioridade = 0
    var idade1 = number(document.getElementById("idade1").value)
    var idade2 = number(document.getElementById("idade2").value)
    var idade3 = number(document.getElementById("idade3").value)
    var idade4 = number(document.getElementById("idade4").value)
    var idade5 = number(document.getElementById("idade5").value)
    if(idade1 >= maioridade){
        maioridade = idade1
    }
    else if(idade2 > maioridade){
        maioridade = idade2
    }
    else if(idade3 > maioridade){
        maioridade = idade3
    }
    else if(idade4 > maioridade){
        maioridade = idade4
    }
    else if(idade5 > maioridade){
        maioridade = idade5
    }
    else if(idade2 = maioridade){
        alert("Mais de uma idade maior")
    }
    else if(idade3 = maioridade){
        alert("Mais de uma idade maior")
    }
    else if(idade4 = maioridade){
        alert("Mais de uma idade maior")
    }
    else if(idade5 = maioridade){
        alert("Mais de uma idade maior")
    }
    alert("A maior idade é ", maioridade, "E éssa é a idade de ", nomedomaisvelho)
    document.getElementById("rr").innerHTML = maioridade