const form = document.getElementById('valid-form');

var formvalid = false;

function numbervalid(campoA, campoB) {
    return campoB > campoA;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var campoA = parseFloat(document.getElementById('num1').value);
    var campoB = parseFloat(document.getElementById('num2').value);

    if (numbervalid(campoA, campoB)){
        document.querySelector('.error-msn').style.display = 'none';
        document.querySelector('.success-msn').style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    } 
    else {
        document.querySelector('.error-msn').style.display = 'block';
        document.querySelector('.success-msn').style.display = 'none';
        
    }
});