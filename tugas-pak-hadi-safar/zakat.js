var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("history");

var hargaEmasRupiah = 1100000;


function muatHistory(){
   let data= localStorage.getItem(`zakatHistory`); // untuk mengambil 
   if(data === null){
    data =[];
   }else{
    data = JSON.parse(data);
   }
   historyList.innerHTML=""; 
   for (var i=0; i<data.length; i++){ 
                   //jumlah elemn dlm array data
    var li = document.createElement("li"); // untuk menghasilkan node DOM kosong 
    li.innerHTML = `<span> ${data[i]} </span>`; // untuk mengisi elemen li dengan teks dari data[i] dibungkus di dalam span
    historyList.appendChild(li); // untk menmbahkan li kedalm historylist
   }
}
function simpanHistory(text){ // function untuk mneyalakan
    let data=localStorage.getItem('zakatHistory');
    if(data === null){
        data =[]; 
    }else{
        data = JSON.parse(data);
    }
    data.unshift(text) 
    if(data.length > 10){
        data = data.slice(0,10);
    }
    localStorage.setItem('zakatHistory', JSON.stringify(data)) 
    muatHistory();  // tampilan
    console.log(data);
}
tombol.addEventListener("click", function() {  // klu tombol diklick fungsi di dlmnya lgsng dijalankan
    var input= inputGram.value.trim(); 
    var emas = parseFloat(input); // dari string ke kedalam decimal 
    var nisab= 85; 
    console.log(emas); 
    
    if( input === "" || isNaN(emas)){  //  isnan cek apakah input bukan angka
        alert("KOSONG!"); // maka ada pop up
        hasil.textContent = "coba donkkkk"; // jika belum zakat maka muncul tampilan 
        return;
    };
    
    if( emas < nisab){
        hasil.textContent = "Belum Wajib Zakat"
        simpanHistory(`${emas}gram maka "Belum Wajib Zakat"`)
    }else{
       
        let zakat = emas*0.025 ;
        let rupiah = zakat*hargaEmasRupiah ; 
        hasil.textContent = `Wajib Zakat Emas ${zakat}gram atau Rp.${rupiah}` 
        simpanHistory(`${emas}gram maka wajib zakat sebesar Rp.${rupiah.toLocaleString()}`) // menampilkan hasil formt 
    }                                                           // buat koma biar lbh rapi
    console.log(hasil)
    
    inputGram.value = ""
})
muatHistory();




