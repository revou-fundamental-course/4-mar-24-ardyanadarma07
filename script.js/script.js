var man = document.getElementById("sex-man")
var women = document.getElementById("sex-woman")
var weight = document.getElementById("weight-input")
var age = document.getElementById("age-input")
var height = document.getElementById("height-input")
var submit = document.getElementById("submit")
var result = document.getElementById("result-bmi")
var comment = document.getElementById("comment")



function calculate() {

    if(age.value=='' || height.value=='' || weight.value=='' || (man.checked==false && woman.checked==false)) {
        alert("Mohon isi data diri dengan benar");
    }else {
        resultbmi()
    }
}
function resultbmi() {
    var p = [height.value, weight.value, age.value];
    if(man.checked) {
        p.push("man")
    }else if(women.checked) {
        p.push("women")
    }
    var bmi = (weight.input/height-input*height-input);
    var result = '';
    if(bmi<18.5) {
        result = 'Underweight';
    }else if(18.6<=bmi&&bmi>=24.9) {
        result = 'Normal (ideal)'
    }else if(25<=bmi&&bmi>=29.9) {
        result = 'Normal (ideal)'
    }else if(30<=bmi) {
        result = 'OBESITAS'
    }

}

