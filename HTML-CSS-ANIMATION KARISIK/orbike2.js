const mesajs = document.querySelectorAll('.birmesaj');

window.addEventListener('scroll', checkMesajs);

checkMesajs();

function checkMesajs(){
const triggerBottom = window.innerHeight / 5 * 4;

mesajs.forEach(birmesaj => {
const mesajTop = birmesaj.getBoundingClientRect().top;

if(mesajTop < triggerBottom){
birmesaj.classList.add('show');
} else {
  birmesaj.classList.remove('show');

}
})
}

const mesajss = document.querySelectorAll('.ikimesaj');

window.addEventListener('scroll', checkMesajss);

checkMesajss();

function checkMesajss(){
const triggerBottom = window.innerHeight / 5 * 4;

mesajss.forEach(ikimesaj => {
const mesajTop = ikimesaj.getBoundingClientRect().top;

if(mesajTop < triggerBottom){
ikimesaj.classList.add('show');
} else {
  ikimesaj.classList.remove('show');

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




















