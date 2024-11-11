function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        img.setAttribute("src", "/assets/img/avatar-light.png")
    } else {
        img.setAttribute("src", "/assets/img/avatar.png")
    }

    const alt = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        alt.setAttribute("alt", "Foto de Wellington no espelho")
    } else {
        alt.setAttribute("alt", "Foto de Wellington na praia")
    }
}