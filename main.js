$(document).ready(function() {

});

function unit(n, u) {
    let prefix, value
    if(n < Math.pow(10, -3) && n > Math.pow(10, -6)) {
        prefix = "\u00B5" + u;
        value = (n * 1e6).toString()
    }
    else if(n < 1 && n > Math.pow(10, -3)) {
        prefix = "m" + u;
        value = (n * 1e3).toString()
    }
    else if(n < Math.pow(10, -6) && n > Math.pow(10, -9)) {
        prefix =  "n" + u;
        value = (n * 1e9).toString()
    }
    else if(n < Math.pow(10, -9) && n > Math.pow(10, -12)) {
        prefix =  "p" + u;
        value = (n * 1e12).toString()
    }
    else if(n < Math.pow(10, -12) && n > Math.pow(10, -15)) {
        prefix =  "f" + u;
        value = (n * 1e15).toString()
    }
    else if(n < Math.pow(10, -15) && n > Math.pow(10, -18)) {
        prefix =  "a" + u;
        value = (n * 1e18).toString()
    }
    else if(n < Math.pow(10, 6) && n > Math.pow(10, 3)) {
        prefix = "K" + u;
        value = (n * 1e-3).toString()
    }
    else if(n < Math.pow(10, 9) && n > Math.pow(10, 6)) {
        prefix = "M" + u;
        value = (n * 1e-6).toString()
    }
    else {
        prefix = u;
        value = n
    }
    return value + " "  + prefix;
}
function submit1(){
    let N = document.getElementById('turns').value
    let L = document.getElementById('lsol').value
    let A = document.getElementById('area').value
    let ro = document.getElementById('resistivity').value
    let p = document.getElementById('pole').value
    let v = document.getElementById('vel').value
    let r = document.getElementById('dist').value
    let l = document.getElementById('lmag').value

    let B = (4 * +p * +l ) * 1e-7 / (Math.pow(Math.pow(+r, 2) - Math.pow(+l, 2), 2))
    let E = B * +A * +v * +N / (+L + 2 * +r)
    let i = E * +A / (+ro * +L)

    console.log(E)
    console.log(i)
    document.getElementById('screen0').innerHTML = "Answer"
    document.getElementById("screen1").innerHTML = "Magnetic field : " + unit(B, 'T');
    document.getElementById('screen2').innerHTML = "Induced EMF : " + unit(E, 'V');
    document.getElementById('screen3').innerHTML = 'Induced Current : ' + unit(i, 'A')
}