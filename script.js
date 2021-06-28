 number = document.querySelectorAll('[data-number]');
 operator = document.querySelectorAll('[data-opt]');
 backspace = document.querySelector('[data-backspace]');
 clearall = document.querySelector('[data-clear-all]');
 equal = document.querySelector('[data-eql]');
 pre = document.querySelector('.previous');
 curr = document.querySelector('.current');


 class calculator {
     constructor(pre, curr) {
         this.pre = pre
         this.curr = curr
         this.clear()
     }
 }

 function clear() {
     this.curr = '';
     this.pre = '';

 }

 function back() {

 }


 number.forEach(button => {
     button.addEventListener('click', (e) => {
         console.log('hello')

     })

 });
 operator.forEach(button => {
     button.addEventListener('click', () => {
         console.log('bye')
     })
 })


 backspace.addEventListener('click', e => {
     console.log('hi')
 })



 clearall.addEventListener('click', (e) => {
     console.log('hee')
     clear();
 })

 equal.addEventListener('click', (e) => {
     console.log('lol')
 })

 function display(e) {
     let inputvalue = e.target.InnerText;


     console.log(inputvalue)
     screen.innerText = inputvalue;
 }