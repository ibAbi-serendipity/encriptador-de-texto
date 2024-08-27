function encrypted() {
    var text = document.querySelector(".textarea").value;
    var encrypted = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.querySelector(".box__textarea").value = encrypted;
    document.querySelector(".textarea").value = "";
}

function decrypted() {
    var text = document.querySelector(".textarea").value;
    var decrypted = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.querySelector(".box__textarea").value = decrypted;
    document.querySelector(".textarea").value = "";
}