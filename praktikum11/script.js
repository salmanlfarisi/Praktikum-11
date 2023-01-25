document.querySelectorAll("#option a").forEach((a) => {
    // jika di klik akan menjalankan sebuah fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap element hasil komputer dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    //mengisi pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    //pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        // alert("SERI");
        setTimeout(() => alert("SERI"), 500);
    }

    // Jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("Menang");
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User Menang");
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User Menang");
    }

    // Jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Menang");
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Komputer Menang");
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Komputer Menang");
    }

}
