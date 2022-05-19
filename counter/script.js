let plus = document.getElementById('increment');
let minus = document.getElementById('decrement');
let int = document.getElementById('number');
let result = 0;

plus.addEventListener('click', function(){
    result += 1;
    int.innerHTML = result;
})

minus.addEventListener('click', function(){
    result -= 1;
    int.innerHTML = result;
})