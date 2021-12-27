//Cambiar 'Conocé todo lo que...' por 'Conocé más' en modo Mobile

const buttonMain = document.getElementById("button-main");

if (window.innerWidth < 992) {
	buttonMain.innerHTML = "Conocé más";
}

window.addEventListener("resize", () => {
	if (window.innerWidth < 992) {
	buttonMain.innerHTML = "Conocé más";
	} else {
	buttonMain.innerHTML = "Conocé todo lo que ofrecemos para la producción";

	}

})

//Agregar el auto-height en modo Mobile

const section0 = document.getElementById("section0");
const section1 = document.getElementById("section1");

if (window.innerWidth < 992) {
	section0.classList.add("fp-auto-height");
}

//boton onClick

buttonMain.onclick = () => {
	section1.scrollIntoView();
}


