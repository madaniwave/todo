//pilih elemen
var input = document.getElementById("input-tugas")
var tombol = document.getElementById("tombol-tambah")
var daftar = document.getElementById("daftar-tugas")

//array tugas
var tugas = [];

//fungsi : tampilankan tugas
function tampilkan () {
    daftar.innerHTML = ""; //kosongkan dulu

    for(var i = 0; i < tugas.length; i++) {
        var li = document.createElement("li");
        li.className = "item-tugas" ;
        li.innerHTML = 
        "<span>" +
        tugas[i] +
        '</span><button onclick="hapus(' +
        i +
        ')">Hapus</button>';
        daftar.appendChild(li);

    }
}

// FUNGSI;tambah tugas
function tambah() {
    var teks = input.value.trim();

    if (teks === "") {
        alert("Tugas kosong!");
        return;
    }

    tugas.push(teks); // masukkan ke array
    localStorage.setItem("tugas", JSON.stringify(tugas)); //simpan ke localStronge

    input.value = ""; // kosongkan input 
    tampilkan(); // tampilkan ulang
}

// FUNGSI: Hapus tugas
function hapus(index){
    tugas.splice(index, 1); //hapus dari array
    localStorage.setItem("tugas", JSON.stringify(tugas)); //simpan 
    // perubahan
    tampilkan(); //tampilkan ulang
}

// FUNGSI: Muat data dari localstorage
function muat(){
    var data = localStorage.getItem("tugas");
    if(data !== null){
        tugas = JSON.parse(data);
    }
    tampilkan();
}

// EVENT tombol
tombol.addEventListener('click', tambah);

// Jalankan saat halaman dimuat
muat();

//JSON stringify
// = untuk menjadikan object teks/string