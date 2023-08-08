function maioridade() {
    var maioridade = 0
    var idade1 = number(document.getElementById("idade1").value)
    var idade2 = number(document.getElementById("idade2").value)
    var idade3 = number(document.getElementById("idade3").value)
    var idade4 = number(document.getElementById("idade4").value)
    var idade5 = number(document.getElementById("idade5").value)
    Math.max(idade1, idade2, idade3, idade4, idade5);
}