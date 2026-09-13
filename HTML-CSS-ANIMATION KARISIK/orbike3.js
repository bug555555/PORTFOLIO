const mesajssbir = document.querySelectorAll('.birmesaj');

window.addEventListener('scroll', checkMesajssbir);

checkMesajssbir();

function checkMesajssbir(){
const triggerBottom = window.innerHeight / 5 * 4;

mesajssbir.forEach(birmesaj => {
const mesajTop = birmesaj.getBoundingClientRect().top;

if(mesajTop < triggerBottom){
birmesaj.classList.add('show');
} else {
  birmesaj.classList.remove('show');

}
})
}

const pcbir = document.querySelectorAll('.birpc');

window.addEventListener('scroll', checkPc);

checkPc();

function checkPc(){
const triggerBottom = window.innerHeight / 5 * 4;

pcbir.forEach(birpc => {
const pcTop = birpc.getBoundingClientRect().top;

if(pcTop < triggerBottom){
birpc.classList.add('show');
} else {
  birpc.classList.remove('show');

}
})
}

const pciki = document.querySelectorAll('.ikipc');

window.addEventListener('scroll', checkPciki);

checkPciki();

function checkPciki(){
const triggerBottom = window.innerHeight / 5 * 4;

pciki.forEach(ikipc => {
const pcTop = ikipc.getBoundingClientRect().top;

if(pcTop < triggerBottom){
ikipc.classList.add('show');
} else {
  ikipc.classList.remove('show');

}
})
}

const pcuc = document.querySelectorAll('.ucpc');

window.addEventListener('scroll', checkPcuc);

checkPcuc();

function checkPcuc(){
const triggerBottom = window.innerHeight / 5 * 4;

pcuc.forEach(ucpc => {
const pcTop = ucpc.getBoundingClientRect().top;

if(pcTop < triggerBottom){
ucpc.classList.add('show');
} else {
  ucpc.classList.remove('show');

}
})
}

const telefon = document.querySelectorAll('.tf1');

window.addEventListener('scroll', checkTf);

checkTf();

function checkTf(){
const triggerBottom = window.innerHeight / 5 * 4;

telefon.forEach(tf1 => {
const tfTop = tf1.getBoundingClientRect().top;

if(tfTop < triggerBottom){
tf1.classList.add('show');
} else {
  tf1.classList.remove('show');

}
})
}

const yazis = document.querySelectorAll('.ikiyazi');

window.addEventListener('scroll', checkYazı);

checkYazı();

function checkYazı(){
const triggerBottom = window.innerHeight / 5 * 4;

yazis.forEach(ikiyazi => {
const yaziTop = ikiyazi.getBoundingClientRect().top;

if(yaziTop < triggerBottom){
ikiyazi.classList.add('show');
} else {
  ikiyazi.classList.remove('show');

}
})
}

const baslik = document.querySelectorAll('.ikibaslik');

window.addEventListener('scroll', checkBaslik);

checkBaslik();

function checkBaslik(){
const triggerBottom = window.innerHeight / 5 * 4;

baslik.forEach(ikibaslik => {
const baslikTop = ikibaslik.getBoundingClientRect().top;

if(baslikTop < triggerBottom){
ikibaslik.classList.add('show');
} else {
  ikibaslik.classList.remove('show');

}
})
}