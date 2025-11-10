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
          <!-- function-scoped -->
          <!-- kalau make let namanya scope blok -->
    var li = document.createElement("li");
    li.innerHTML = `<span> ${data[i]} </span>`; // untuk mengisi elemen li dengan teks dari data[i]dibungkus di dalam span
    historyList.appendChild(li); // untuk menghsilkan node domnya
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




