var inputGram = document.getElementById("emas-gram")
var tombol = document.getElementById("hitung")
var hasil= document.getElementById("hasil")
var historyList = document.getElementById("history")

var hargaEmasRupiah = 1100000;

// function muatHistory() {
//     var data = localStorage.getItem('zakatHistory');
//     if (!data) return;
//     var list = JSON.parse(data);

//     historyList.innerHTML = "";
//     list.forEach(function(item) {
//         var li = document.createElement('li');
//         li.textContent = item;
//         historyList.appendChild(li);
//     });
// }

var riwayat = []

function muatHistory() {
    var data = localStorage.getItem("zakatHistory");
    if (data !== null) {
        var list = JSON.parse(data);

        historyList.innerHTML = ""; // kosongkan dulu isinya

        for (var i = 0; i < list.length; i++) {
            var li = document.createElement("li");
            li.className = "item-riwayat";
            li.textContent = list[i]; // tampilkan isi teks
            historyList.appendChild(li);
        }
    }
}


function simpanHistory(text) {
    var data = localStorage.getItem("zakatHistory") // ini buat ambil dt 
    var list = data ? JSON.parse(data) : [] // ngsubah dr string ke array
    
    list.unshift(teks); // buat nambah dt baru di awal array
    if(list.length > 10 ) 
        list = list.slice(0, 10) // buat btasi 10 data

    localStorage.setItem("zakatHistory", JSON.stringify(zakat)); //simpan ke localStronge
    muatHistory() // untuk tampilkan ulang 
}

function simpanHistory(teks) {
    riwayat.unshift(teks); // tambahkan di awal
    if (riwayat.length > 10) { // batasi maksimal 10 riwayat
        riwayat.pop(); // untuk menghapus elemen akhir
    }

    localStorage.setItem("zakatHistory", JSON.stringify(riwayat));
    tampilkanRiwayat();
}

tombol.addEventListener('click', function() {
 // TODO: ambil nilai input emas, parsing ke number, nisab = 85
 var emas = parseFloat(inputGram.value);// parseFloat (menguraian) ambil input terus di pasing ke number
 var nisab = 85;
 // TODO: Jika input tidak valid, tampilkan pesan error dan return
  if (isNaN(emas) || emas < 0) {
        hasil.textContent = "Masukkan jumlah emas yang valid!";
        return;
        // hasilContent
    }
 // TODO: Jika emas < nisab, tampilkan "Belum wajib zakat" dan simpan ke riwayat
 if (emas < nisab) {
     hasil.textContent = `Belum wajib zakat (karena kurang dari ${nisab} gram)`;
     simpanHistory(`Belum wajib zakat: ${emas} gram`);
 // hasil.textContent = ...
 // simpanHistory(...)
 } else {
    var zakatGram = emas * 0.025;
        var zakatRupiah = zakatGram * hargaEmasRupiah;

        hasil.textContent = `Zakat yang harus dibayar: ${zakatGram.toFixed(2)} gram (${zakatRupiah.toLocaleString('id-ID', {style:'currency', currency:'IDR'})})`;

        simpanHistory(`Zakat: ${zakatGram.toFixed(2)} gram (${zakatRupiah.toLocaleString('id-ID', {style:'currency', currency:'IDR'})})`);
    
 // TODO: Hitung zakat = emas * 0.025, rupiah = zakat * hargaEmasRupiah
 // hasil.textContent = ...
 // simpanHistory(...)
 }
 // TODO: Kosongkan inputGram setelah proses
});

inputGram.value = "";

// tombol.addEventListener('click', tambah);

// Jalankan saat halaman dimuat
muatHistory();





var inputGram = document.getElementById('emas-gram');
var tombol = document.getElementById('hitung');
var hasil = document.getElementById('hasil');
var historyList = document.getElementById('history');

var hargaEmasRupiah = 1100000;

function muatHistory() {
    var data = localStorage.getItem('zakatHistory');
    if (!data) return;
    var list = JSON.parse(data);

    historyList.innerHTML = "";
    list.forEach(function(item) //Mengulang setiap item di dalam array dan menampilkan sebagai <li> {
        var li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function simpanHistory(teks) {
    var data = localStorage.getItem('zakatHistory');
    var list = data ? JSON.parse(data) : [];

    list.unshift(teks);
    if (list.length > 10) {
        list = list.slice(0, 10);
    }

    localStorage.setItem('zakatHistory', JSON.stringify(list));
    muatHistory();
}

tombol.addEventListener('click', function() {
    var emas = parseFloat(inputGram.value);
    var nisab = 85;

    if (isNaN(emas) || emas < 0) {
        hasil.textContent = "Masukkan jumlah emas yang valid!";
        return;
    }

    if (emas < nisab) {
        hasil.textContent = `Belum wajib zakat (karena kurang dari ${nisab} gram)`;
        simpanHistory(`Belum wajib zakat: ${emas} gram`);
    } else {
        var zakatGram = emas * 0.025;
        var zakatRupiah = zakatGram * hargaEmasRupiah;

        hasil.textContent = `Zakat yang harus dibayar: ${zakatGram.toFixed(2)} gram (${zakatRupiah.toLocaleString('id-ID', {style:'currency', currency:'IDR'})})`;

        simpanHistory(`Zakat: ${zakatGram.toFixed(2)} gram (${zakatRupiah.toLocaleString('id-ID', {style:'currency', currency:'IDR'})})`);
    }

    inputGram.value = "";
});

muatHistory();




var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("history");

var hargaEmasRupiah = 1100000; //Variabel yang menyimpan harga emas per gram (dalam Rupiah).


function muatHistory(){
   let data=localStorage.getItem(`zakatHistory`); // zakathistory key
   if(data === null){
    data =[];
   }else{
    data = JSON.parse(data);
   }
   historyList.innerHTML=""; // menghapus riwayat sebelumnya agar tidk doble
   for (var i=0; i<data.length; i++){ // for itu untuk pengulangan
    var li = document.createElement("li");
    li.innerHTML = `<span> ${data[i]} </span>`; // untuk mengisi elemen li dengan teks dari data[i] dibungkus di dalam span
    historyList.appendChild(li);
   }
}
function simpanHistory(text){
    let data=localStorage.getItem('zakatHistory');
    if(data === null){
        data =[]; //Jika ada data, ubah ke array. Jika belum ada, buat array kosong.
    }else{
        data = JSON.parse(data);
    }
    data.unshift(text) // untuk menambahkan item baru di array
    if(data.length > 10){
        data = data.slice(0,10);// untuk batasi jumlah data riwayat 10 pada akhir riwayat data
    }
    localStorage.setItem('zakatHistory', JSON.stringify(data)) //Menyimpan kbml hasil update ke localStorage
    muatHistory(); // utk memperbarui tampilan daftar riwayat
    console.log(data);
}
tombol.addEventListener("click", function() { // klu tombol diklick fungsi di dlmnya lgsng dijalankan
    var input= inputGram.value.trim(); // trim utk membersihkan spasi
    var emas = parseFloat(input); // persefloat utk konversi string menjadi angka desimal
    var nisab= 85; // harus mencapai 85 
    console.log(emas); 
     //TODO : jika input tidak valid, tampilkan pesan eror dan return
    if( input === "" || isNaN(emas)){ //  isnan cek apakah input bukan angka
        alert("KOSONG!"); // maka ada popup
        hasil.textContent = "coba lagi"; // jika belum zakat maka menampilkan pesan
        return;
    };
    //TODO: jika emas < nisab, tampilkan "belum wajib zakat" dan simpan  ke riwayat
    if( emas < nisab){
        hasil.textContent = "Belum Wajib Zakat"
        simpanHistory(`${emas}gram maka "Belum Wajib Zakat"`)
    }else{
        //TODO: hitung zakat = emas*0.025, rupiah = zakat*hargaEmasRupiah
        let zakat = emas*0.025 ;
        let rupiah = zakat*hargaEmasRupiah ; // menghitung zaktrupiah,zakatgram*hargaemasrupiah
        hasil.textContent = `Wajib Zakat Emas ${zakat}gram atau Rp.${rupiah}` // menampilkan hasil formt rupiah
        simpanHistory(`${emas}gram maka wajib zakat sebesar Rp.${rupiah.toLocaleString()}`) 
    }
    console.log(hasil)
    //TODO: kosongkan inputGram setalah proses
    inputGram.value = ""
})
muatHistory();//menampilkan ulang <ul>




