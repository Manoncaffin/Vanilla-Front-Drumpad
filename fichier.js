
const key2 = document.querySelector ("#key2");
const key3 = document.querySelector ("#key3");
const key4 = document.querySelector ("#key4");
const key5 = document.querySelector ("#key5");
const key6 = document.querySelector ("#key6");
const key7 = document.querySelector ("#key7");
const key8 = document.querySelector ("#key8");
const key9 = document.querySelector ("#key9");

const audio1 = document.querySelector ("#song1");
const audio2 = document.querySelector ("#song2");
const audio3 = document.querySelector ("#song3");
const audio4 = document.querySelector ("#song4");
const audio5 = document.querySelector ("#song5");
const audio6 = document.querySelector ("#song6");
const audio7 = document.querySelector ("#song7");
const audio8 = document.querySelector ("#song8");
const audio9 = document.querySelector ("#song9");


// console.log(key1, key2, key3, key4, key5, key6, key7, key8, key9);
// console.log(audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9);

// key1.addEventListener('click', () => {
//   audio1.play()
// })

// key2.addEventListener('click', () => {
//   audio2.play()
// })

// key3.addEventListener('click', () => {
//   audio3.play()
// })

// key4.addEventListener('click', () => {
//   audio4.play()
// })

// key5.addEventListener('click', () => {
//   audio5.play()
// })

// key6.addEventListener('click', () => {
//   audio6.play()
// })

// key7.addEventListener('click', () => {
//   audio7.play()
// })

// key8.addEventListener('click', () => {
//   audio8.play()
// })

// key9.addEventListener('click', () => {
//   audio9.play()
// })



const key1 = document.querySelector ("#key1");
document.addEventListener('keydown', (event) => {
  if (event.key === 'a' ){
  key1.classList.add ('playing');
  audio1.play()
}
})

document.addEventListener('keyup', (event) => {
  if (event.key === 'a'){
    key1.classList.remove ('playing');
  }
})
