function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.querySelector("#profile")

  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "Foto MC Kevin de azul em ensaio de foto")
  } else {
    alt.setAttribute("alt", "Foto MC Kevin no álbum passado e presente")
  }

  // pegar a tag img

  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode manter a imagem normal
}
