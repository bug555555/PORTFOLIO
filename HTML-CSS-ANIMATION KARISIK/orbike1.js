const mesajs = document.querySelectorAll('.mesaj');

window.addEventListener('scroll', checkMesajs);

checkMesajs();

function checkMesajs(){
const triggerBottom = window.innerHeight / 5 * 4;

mesajs.forEach(mesaj => {
const mesajTop = mesaj.getBoundingClientRect().top;

if(mesajTop < triggerBottom){
mesaj.classList.add('show');
} else {
  mesaj.classList.remove('show');

}
})
}

const bikes = document.querySelectorAll('.bike');

window.addEventListener('scroll', checkBikes);

checkBikes();

function checkBikes(){
const triggerBottom = window.innerHeight / 5 * 4;

bikes.forEach(bike => {
const bikeTop = bike.getBoundingClientRect().top;

if(bikeTop < triggerBottom){
bike.classList.add('show');
} else {
  bike.classList.remove('show');

}
})
}

const pcs = document.querySelectorAll('.pc');

window.addEventListener('scroll', checkPc);

checkPc();

function checkPc(){
const triggerBottom = window.innerHeight / 5 * 4;

pcs.forEach(pc => {
const pcTop = pc.getBoundingClientRect().top;

if(pcTop < triggerBottom){
pc.classList.add('show');
} else {
  pc.classList.remove('show');

}
})
}

const telefons = document.querySelectorAll('.teelefon');

window.addEventListener('scroll', checkTelefons);

checkTelefons();

function checkTelefons(){
const triggerBottom = window.innerHeight / 5 * 4;

telefons.forEach(teelefon => {
const teelefonTop = teelefon.getBoundingClientRect().top;

if(teelefonTop < triggerBottom){
teelefon.classList.add('show');
} else {
  teelefon.classList.remove('show');

}
})
}

const basliks = document.querySelectorAll('.birbaslik');

window.addEventListener('scroll', checkBasliks);

checkBasliks();

function checkBasliks(){
const triggerBottom = window.innerHeight / 5 * 4;

basliks.forEach(birbaslik => {
const baslikTop = birbaslik.getBoundingClientRect().top;

if(baslikTop < triggerBottom){
birbaslik.classList.add('show');
} else {
  birbaslik.classList.remove('show');

}
})
}

const cizgiss = document.querySelectorAll('.cizgi');

window.addEventListener('scroll', checkCizgi);

checkCizgi();

function checkCizgi(){
const triggerBottom = window.innerHeight / 5 * 4;

cizgiss.forEach(cizgi => {
const cizgiTop = cizgi.getBoundingClientRect().top;

if(cizgiTop < triggerBottom){
cizgi.classList.add('show');
} else {
  cizgi.classList.remove('show');

}
})
}

const baslikl = document.querySelectorAll('.ikibaslik');

window.addEventListener('scroll', checkBaslikl);

checkBaslikl();

function checkBaslikl(){
const triggerBottom = window.innerHeight / 5 * 4;

baslikl.forEach(ikibaslik => {
const basliklTop = ikibaslik.getBoundingClientRect().top;

if(basliklTop < triggerBottom){
ikibaslik.classList.add('show');
} else {
  ikibaslik.classList.remove('show');

}
})
}

const yazilars = document.querySelectorAll('.ikiyazi');

window.addEventListener('scroll', checkYazilars);

checkYazilars();

function checkYazilars(){
const triggerBottom = window.innerHeight / 5 * 4;

yazilars.forEach(ikiyazi => {
const YazilarsTop = ikiyazi.getBoundingClientRect().top;

if(YazilarsTop < triggerBottom){
ikiyazi.classList.add('show');
} else {
  ikiyazi.classList.remove('show');

}
})
}

const belges = document.querySelectorAll('.belge');

window.addEventListener('scroll', checkBelges);

checkBelges();

function checkBelges(){
const triggerBottom = window.innerHeight / 5 * 4;

belges.forEach(belge => {
const belgeTop = belge.getBoundingClientRect().top;

if(belgeTop < triggerBottom){
belge.classList.add('show');
} else {
  belge.classList.remove('show');

}
})
}

const ikipcs = document.querySelectorAll('.pciki');

window.addEventListener('scroll', checkİkipc);

checkİkipc();

function checkİkipc(){
const triggerBottom = window.innerHeight / 5 * 4;

ikipc.forEach(pciki => {
const ikipcTop = pciki.getBoundingClientRect().top;

if(ikipcTop < triggerBottom){
  pciki.classList.add('show');
} else {
  pciki.classList.remove('show');

}
})
}















