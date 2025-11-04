var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("history");

var hargaEmasRupiah = 1100000;


function muatHistory(){
   let data=localStorage.getItem(`zakatHistory`); 
   if(data === null){
    data =[];
   }else{
    data = JSON.parse(data);
   }
   historyList.innerHTML=""; 
   for (var i=0; i<data.length; i++){
    var li = document.createElement("li");
    li.innerHTML = `<span> ${data[i]} </span>`; 
    historyList.appendChild(li);
   }
}
function simpanHistory(text){
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
    muatHistory(); 
    console.log(data);
}
tombol.addEventListener("click", function() { 
    var input= inputGram.value.trim(); 
    var emas = parseFloat(input); 
    var nisab= 85; 
    console.log(emas); 
    
    if( input === "" || isNaN(emas)){ 
        alert("KOSONG!"); 
        hasil.textContent = "coba donkkkk"; 
        return;
    };
    
    if( emas < nisab){
        hasil.textContent = "Belum Wajib Zakat"
        simpanHistory(`${emas}gram maka "Belum Wajib Zakat"`)
    }else{
       
        let zakat = emas*0.025 ;
        let rupiah = zakat*hargaEmasRupiah ; 
        hasil.textContent = `Wajib Zakat Emas ${zakat}gram atau Rp.${rupiah}` 
        simpanHistory(`${emas}gram maka wajib zakat sebesar Rp.${rupiah.toLocaleString()}`) 
    }
    console.log(hasil)
    
    inputGram.value = ""
})
muatHistory();




