/* 
Proyecto: Weather Channel

*/

console.group("Proyecto: Weather Channel");

$boton = document.querySelector('button')

function cargarCiudad() {
    
    let $input = document.querySelector('input')

    let ciudad = $input.value
    let URL = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric"

    if($input.value.trim() === "") return alert("No has ingresado un valor en el input")

    $.getJSON( URL, (data) => {
        console.log( data );
        document.querySelector(".container").style.visibility = "visible"
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").innerHTML = data.main.temp.toFixed(0) + "<sup>°C</sup>"
        document.querySelector("#wicon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        document.querySelector("#descripcion").textContent = data.weather[0].description

        $input.value = ""
    })
    .fail(function() {
        alert("Ciudad no encontrada!")
    })
}

$boton.addEventListener('click', () => {
    cargarCiudad()
})

console.groupEnd();


